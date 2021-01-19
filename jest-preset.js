const path = require('path');
const resolve = path.resolve;
const join = path.join;

module.exports = {
    collectCoverage: true,

    coverageReporters: [
        'lcov',
        'text',
        'clover'
    ],

    watchPathIgnorePatterns: [
        'node_modules'
    ],

    clearMocks: true,

    moduleFileExtensions: [
        'js'
    ],

    moduleNameMapper: {
        '\\.(css|less|scss)$': resolve(join(__dirname, '@tool/__mocks__/styleMock.js')),
        '^src(.*)$': `${process.env.ADMIN_PATH}/src$1`,
        vue$: 'vue/dist/vue.common.dev.js',
    },

    transform: {
        '^.+\\.jsx?$': resolve(join(__dirname, '@tool/transform.js')),
        '^.+\\.twig$': resolve(join(__dirname, '@tool/twig-to-vue-transformer/index.js'))
    },

    modulePathIgnorePatterns: [
        '<rootDir>/test/e2e/'
    ],

    setupFilesAfterEnv: [
        resolve(join(__dirname, '@tool/setup-env-require-context.js')),
        resolve(join(__dirname, '@tool/setup-env-for-shopware.js'))
    ],

    testMatch: [
        '<rootDir>/test/**/*.spec.js'
    ]
};
