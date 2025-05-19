// codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://dev.whereisagift.com/graphql",
  documents: ["src/**/*.gql"],

  generates: {
    // 1) Базовые типы всей схемы
    "src/types/__generated__/schema-types.ts": {
      plugins: ["typescript"],
    },

    // 2) Операции + хуки рядом с .gql
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        folder: "__generated__",
        baseTypesPath: "~@/types",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
