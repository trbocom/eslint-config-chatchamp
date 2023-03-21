# eslint-config-chatchamp

This package provides chatchamp's .eslintrc as an extensible shared config.

## Installation

1.

```yarn add @chatchamp/eslint-config --dev```

2.

```
{
  "extends": [
    "@chatchamp/eslint-config"
  ],
  ...
}
```

## Deployment

1. version bump in `package.json`

2.
```bash
  $ npm login
  $ npm publish
```
