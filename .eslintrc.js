module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    ignorePatterns: [
        '**/node_modules/**',
        'build',
    ],
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'eol-last': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
    },
};