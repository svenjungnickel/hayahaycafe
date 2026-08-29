/*
 * Workaround fuer OrbStack >= 2.2.3 ("SME support on M4 and newer") auf
 * Apple M4/M5: Der Linux-Gast meldet in AT_HWCAP2 die SME/SME2-Bits, aber
 * kein SVE. dav1d -- der AV1/AVIF-Decoder in Chromium und Electron -- waehlt
 * daraufhin seinen SME2-Codepfad und fuehrt SVE-Instruktionen (z. B. "cntd")
 * aus, die ausserhalb des Streaming-Modus undefiniert sind => SIGILL.
 *
 * Folge: Renderer-/Decoder-Prozess stirbt, sobald eine Seite ein AVIF-Bild
 * enthaelt (Lighthouse haengt, Cypress meldet "Renderer process crashed").
 *
 * Der Shim blendet die SME-Bits aus AT_HWCAP2 aus, sodass dav1d wieder den
 * NEON-Pfad waehlt. Wird per LD_PRELOAD geladen.
 */
#define _GNU_SOURCE
#include <sys/auxv.h>
#include <dlfcn.h>
#include <stddef.h>

/* HWCAP2-Bits (arm64), siehe linux/arch/arm64/include/uapi/asm/hwcap.h */
#define BIT_SME         (1UL << 23)
#define BIT_SME_I16I64  (1UL << 24)
#define BIT_SME_F64F64  (1UL << 25)
#define BIT_SME_I8I32   (1UL << 26)
#define BIT_SME_F16F32  (1UL << 27)
#define BIT_SME_B16F32  (1UL << 28)
#define BIT_SME_F32F32  (1UL << 29)
#define BIT_SME_FA64    (1UL << 30)
#define BIT_SME2        (1UL << 37)
#define BIT_SME2P1      (1UL << 38)
#define BIT_SME_I16I32  (1UL << 39)
#define BIT_SME_BI32I32 (1UL << 40)
#define BIT_SME_B16B16  (1UL << 41)
#define BIT_SME_F16F16  (1UL << 42)

#define SME_MASK (BIT_SME | BIT_SME_I16I64 | BIT_SME_F64F64 | BIT_SME_I8I32 | \
                  BIT_SME_F16F32 | BIT_SME_B16F32 | BIT_SME_F32F32 | \
                  BIT_SME_FA64 | BIT_SME2 | BIT_SME2P1 | BIT_SME_I16I32 | \
                  BIT_SME_BI32I32 | BIT_SME_B16B16 | BIT_SME_F16F16)

static unsigned long (*real_getauxval)(unsigned long) = NULL;

unsigned long getauxval(unsigned long type)
{
    if (!real_getauxval) {
        real_getauxval = (unsigned long (*)(unsigned long))
            dlsym(RTLD_NEXT, "getauxval");
        if (!real_getauxval) {
            return 0;
        }
    }

    unsigned long value = real_getauxval(type);

    if (type == AT_HWCAP2) {
        value &= ~SME_MASK;
    }

    return value;
}
