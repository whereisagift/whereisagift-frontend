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
        extension: ".generated.tsx", // .tsx нужно для React‑хуков
        folder: "__generated__", // результирующая папка рядом с .gql
        baseTypesPath: "~@/types",
      },
      plugins: [
        "typescript-operations", // генерит типы переменных/ответов
        "typescript-react-apollo", // генерит хуки и HOC
      ],
      config: {
        withHooks: true, // включаем хуки
        withHOC: false, // без HOC
        withComponent: false, // без компонентов
      },
    },
  },

  // ← сюда добавляем хук на Prettier
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
  ignoreNoDocuments: true,
};

export default config;
