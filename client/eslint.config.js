// import js from "@eslint/js";
// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
//     plugins: {
//       js,
//       react: pluginReact,
//     },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.browser },
//   },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]);
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ✅ Cấu hình cho JS, JSX
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // ✅ Cấu hình riêng cho TS, TSX với parser TS
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended[0], // cấu hình đầy đủ parser/parserOptions
    plugins: {
      ...tseslint.configs.recommended[0].plugins,
      react: pluginReact,
    },
    rules: {
      ...tseslint.configs.recommended[0].rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
