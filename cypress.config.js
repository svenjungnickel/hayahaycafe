const { defineConfig } = require('cypress');
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8000/',
        specPattern: 'cypress/e2e/*.test.js',
        video: false,
        videoUploadOnPasses: false,
        videoCompression: false,
        projectId: 'imkh2i',
        chromeWebSecurity: false,
        blockHosts: 'www.google-analytics.com',
        retries: {
            runMode: 2,
            openMode: 0,
        },
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                prepareAudit(launchOptions);
            });

            on('task', {
                lighthouse,
                pa11y,
            });
        },
    },
});
