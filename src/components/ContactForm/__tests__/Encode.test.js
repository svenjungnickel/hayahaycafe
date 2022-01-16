/**
 * @jest-environment node
 * For more visit https://jestjs.io/docs/configuration#testenvironment-string
 * */
import Encode from '../Encode';

describe('Encode', () => {
    it('string parameter returns undefined', () => {
        const result = Encode('invalidData');

        expect(result).toEqual(undefined);
    });

    it('integer parameter returns undefined', () => {
        const result = Encode(123);

        expect(result).toEqual(undefined);
    });

    it('boolean parameter returns undefined', () => {
        const result = Encode(true);

        expect(result).toEqual(undefined);
    });

    it('object parameter returns string', () => {
        const result = Encode({});

        expect(result).toBeDefined();
        expect(typeof result).toEqual('string');
    });

    it('data object returns string', () => {
        const result = Encode({
            'form-name': 'contact',
            'g-recaptcha-response': 'randomRecaptchaHash',
            firstName: 'John',
            lastName: 'Doe',
        });

        expect(result).toEqual(
            'form-name=contact&g-recaptcha-response=randomRecaptchaHash&firstName=John&lastName=Doe'
        );
    });
});
