const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:9000/',
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
    },
});
