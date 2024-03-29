module.exports = {
    transform: {
        '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/gatsby.js',
    },
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['node_modules', '.cache', 'public', 'cypress'],
    transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script)/)'],
    globals: {
        __PATH_PREFIX__: '',
    },
    setupFiles: ['<rootDir>/loadershim.js', '<rootDir>/setJestEnvVars.js'],
    setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
    coverageReporters: ['html', 'text-summary'],
};
