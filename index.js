module.exports = {
    extends: [
        "eslint:recommended"
    ],
    globals: {
        chai: true,
        chaiHttp: true,
        expect: true,
        factory: true,
        nock: true,
        sinon: true
    },
    rules: {
        "mocha/no-exclusive-tests": "error",
        "flowtype/no-types-missing-file-annotation": 0,
        "no-var": "error",
        "strict": "error",
        "no-console": "error",
        "require-await": "error",
        "import/no-default-export": "error"
    }
};