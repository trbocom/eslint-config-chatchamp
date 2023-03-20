module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'mocha', 'import'],
  root: true,
  globals: {
    chai: true,
    chaiHttp: true,
    expect: true,
    nock: true,
    sinon: true
  },
  rules: {
    "mocha/no-exclusive-tests": "error",
    "no-var": "error",
    "strict": "error",
    "no-console": "error",
    "require-await": "error",
    "import/no-default-export": "error",
    "import/newline-after-import": "error",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "max-classes-per-file": ["error", 1]
  }
};
