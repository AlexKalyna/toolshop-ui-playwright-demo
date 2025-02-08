import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import airbnbTypescript from "eslint-config-airbnb-typescript";
import playwright from "eslint-plugin-playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "prettier",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:playwright/recommended",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        prettier: fixupPluginRules(prettier),
        import: fixupPluginRules(_import),
        playwright: fixupPluginRules(playwright),
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["./tsconfig.json"],
        },
    },

    rules: {
        "prettier/prettier": "warn",
        "import/prefer-default-export": "off",
        "no-debugger": "warn",
        "playwright/no-wait-for-timeout": "warn",
        "lines-between-class-members": ["error", "always"],
    },
}];