module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-set-state": "off",

        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

        // warning missing trailing comma
        // "comma-dangle": ["warn", "always"],
        // "semi": ["warn", "always"],
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],

        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // refactor maximum line length
        "max-len": ["error", { code: 80, ignoreUrls: true }],

        // empty line around comment
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],

        // disable rules from base configurations
        "for-direction": "off",
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
    },
    overrides: [{
        files: ["bin/*.js", "lib/*.js"],
        excludedFiles: "*.test.js",
        rules: {
            quotes: ["warn", "single"],
        },
    }, ],

    //limit loking parant folder
    root: true,
}
