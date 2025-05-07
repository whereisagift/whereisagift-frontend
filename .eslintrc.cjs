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
    "import/order": [
      2,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          {
            pattern: "components",
            group: "internal",
          },
          {
            pattern: "common",
            group: "internal",
          },
          {
            pattern: "routes/ **",
            group: "internal",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
