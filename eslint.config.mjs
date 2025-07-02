import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tsEslint from "typescript-eslint";

const convertToFlatGlobals = (config) => {
  const result = {};
  for (const [key, allowed] of Object.entries(config)) {
    result[key] = allowed ? "writable" : "readonly";
  }
  return result;
};

export default tsEslint.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "coverage",
      "**/__generated__/**",
    ],
  },
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  prettierRecommended,
  importPlugin.flatConfigs.recommended,
  jsxA11y.flatConfigs.recommended,
  next.flatConfig.coreWebVitals,
  {
    languageOptions: {
      globals: {
        ...convertToFlatGlobals(globals.browser),
        ...convertToFlatGlobals(globals.node),
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-implicit-coercion": "error",
      "prefer-template": "error",
      // "no-console": ["error", { allow: ["warn", "error"] }],
      "jsx-a11y/no-noninteractive-tabindex": "off",
      "@next/next/no-img-element": "off",
    },
  },
);
