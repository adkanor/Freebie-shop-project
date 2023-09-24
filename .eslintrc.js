module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
                jest: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    settings: {
        react: {
            version: "detect", //надо потом указать весрию
        },
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
