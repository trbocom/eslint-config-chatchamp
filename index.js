module.exports = {
    extends: [
        "eslint:recommended",
        "standard",
        "plugin:flowtype/recommended",
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
        "flowtype",
        "mocha",
        "import"
    ],
    rules: {
        "mocha/no-exclusive-tests": "error",
        "flowtype/no-types-missing-file-annotation": 0,
        "no-var": "error",
        "strict": "error",
        "no-console": "error",
        "require-await": "error",
        "import/no-default-export": "error",
        "import/newline-after-import": "error",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        }
    }
};
