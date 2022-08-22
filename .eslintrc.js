module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    '@typescript-eslint/camelcase': 'off',
    "no-self-assign": "off",
    "no-case-declarations": "off",
    "no-useless-escape": "off",
    "no-cond-assign": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {},
      "node": {
        "paths": ["src", "node_modules"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      }
    },
  },
};