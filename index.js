module.exports = {
    parser: "@babel/eslint-parser",
    extends: [
        "eslint:recommended",
        "standard",
        "plugin:promise/recommended"
    ],
    globals: {
        chai: true,
        chaiHttp: true,
        expect: true,
        nock: true,
        sinon: true
    },
    plugins: [
        "babel",
        "mocha",
        "import"
    ],
    rules: {
        "mocha/no-exclusive-tests": "error",
        "no-var": "error",
        "strict": "error",
        "no-console": "error",
        "require-await": "error",
        "import/no-default-export": "error",
        "import/newline-after-import": "error",
        "lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
        "max-classes-per-file": ["error", 1]
    },
    settings: {}
};
