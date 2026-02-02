const js = require('@eslint/js');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');
const jestPlugin = require('eslint-plugin-jest');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const cypressPlugin = require('eslint-plugin-cypress');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

const sanitizeGlobals = (globalsMap = {}) =>
    Object.fromEntries(Object.entries(globalsMap).map(([key, value]) => [key.trim(), value]));

const browserGlobals = sanitizeGlobals(globals.browser);
const commonjsGlobals = sanitizeGlobals(globals.commonjs);
const esGlobals = sanitizeGlobals(globals.es2021 || globals.es2020 || globals.es2017);
const jestGlobals = sanitizeGlobals(globals.jest);
const nodeGlobals = sanitizeGlobals(globals.node);

module.exports = [
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['node_modules/**', '.cache/**', 'public/**'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...browserGlobals,
                ...commonjsGlobals,
                ...esGlobals,
                ...nodeGlobals,
            },
        },
        plugins: {
            jest: jestPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            cypress: cypressPlugin,
            prettier: prettierPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...jestPlugin.configs.recommended.rules,
            ...cypressPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            'prettier/prettier': 'warn',
            quotes: [1, 'single', 'avoid-escape'],
            'react/prop-types': 0,
            'react/jsx-uses-react': 'warn',
            'react/jsx-uses-vars': 'warn',
            'no-console': 0,
            'no-unused-vars': 1,
            'no-func-assign': 2,
            'no-const-assign': 2,
            'no-var': 2,
            'react/react-in-jsx-scope': 0,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
            'jest/expect-expect': 'off',
        },
    },
    {
        files: ['**/*.{test,spec}.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
        plugins: {
            jest: jestPlugin,
        },
        languageOptions: {
            globals: {
                ...jestGlobals,
            },
        },
    },
    {
        files: ['cypress/**/*.{js,jsx}'],
        plugins: {
            cypress: cypressPlugin,
        },
        languageOptions: {
            globals: {
                ...browserGlobals,
                Cypress: 'readonly',
                cy: 'readonly',
            },
        },
    },
];
