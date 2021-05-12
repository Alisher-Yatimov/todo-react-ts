module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        semi: 1,
        quotes: [2, 'single', { avoidEscape: true }],
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};
