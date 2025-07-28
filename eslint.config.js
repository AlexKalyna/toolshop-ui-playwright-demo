import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'], // 👈 Specify file types to lint
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly', // Define 'window' as a global variable
        document: 'readonly', // Define 'document' as a global variable
        console: 'readonly' // Define 'console' as a global variable
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      playwright
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'playwright-report',
      'test-results',
      'bad-code-examples',
      '.github/CODEOWNERS',
      '.github/ISSUE_TEMPLATE/*',
      '.github/pull_request_template.md',
      '.github/BRANCH_NAMING.md',
      '.github/BRANCH_PROTECTION_GUIDE.md',
      '*.md'
    ]
  }
];
