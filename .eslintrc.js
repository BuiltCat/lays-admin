module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        "airbnb-base",
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        cmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
    }
}
