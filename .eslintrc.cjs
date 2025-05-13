module.exports = {
  extends: [
    "eslint:recommended",
    "next/typescript",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    "@next/next/no-img-element": "off",
    "import/order": [
      2,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "**/*.module.css",
            group: "index",
            position: "after",
          },
          {
            pattern: "**/*.css",
            group: "index",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
