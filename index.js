module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@btboy/eslint-config/libs/google.linter.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "array-element-newline": "off",
    camelcase: "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "consistent-this": "off",
    "no-prototype-builtins": "off",
    "dot-location": "off",
    "function-call-argument-newline": "off",
    "implicit-arrow-linebreak": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "max-lines": [
      "error",
      { max: 10, skipComments: true, skipBlankLines: true },
    ],
    "max-lines-per-function": "off",
    "max-params": "off",
    "max-statements": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": "off",
    "no-console": "off",
    "no-empty-function": "off",
    "no-shadow": "off",
    "no-ternary": "off",
    "no-unused-expressions": "warn",
    "no-useless-constructor": "off",
    "no-irregular-whitespace": "off",
    "object-property-newline": "off",
    "padding-line-between-statements": "off",
    "lines-between-class-members": "off",
    "prefer-arrow-callback": "warn",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-named-capture-group": "off",
    "require-unicode-regexp": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowedNames: ["me", "that"],
      },
    ],
  },
};
