module.exports = {
  env: {
    "node": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {}
};