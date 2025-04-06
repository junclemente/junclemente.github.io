module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off", // not needed in Gatsby/React 17+
    "arrow-body-style": ["warn", "as-needed"], // 💡 Warns you when you use `{}` and `return` unnecessarily
    "react/prop-types": "off", // Optional, since you’re not using PropTypes
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
