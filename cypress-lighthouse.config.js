const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://hayahaycafe.netlify.app/',
        specPattern: 'cypress/lighthouse',
        videoUploadOnPasses: false,
        projectId: 'imkh2i',
        chromeWebSecurity: false,
        blockHosts: 'www.google-analytics.com',
        retries: {
            runMode: 2,
            openMode: 0,
        },
        lighthouse: {
            performance: 100,
            accessibility: 100,
            'best-practices': 100,
            seo: 100,
            pwa: 100,
        },
    },
});
