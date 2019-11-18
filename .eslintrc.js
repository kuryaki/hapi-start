module.exports = {
    extends: [
        '@hapi/eslint-config-hapi',
    ],
    parserOptions: {
        ecmaVersion: 9
    },
    rules: {
        '@hapi/hapi/scope-start': 'off',
        '@hapi/hapi/no-arrowception': 'off'
    }
}
