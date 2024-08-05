import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPlugin from 'eslint-plugin-import';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...compat.config(eslintPlugin.configs['errors']),
	...compat.config(eslintPlugin.configs['typescript']),
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		languageOptions: {
			globals: {
				NodeJS: true
			}
		},
		rules: {
			'import/named': 'error',
			'import/namespace': 'error',
			'import/default': 'error',
			'import/export': 'error',
			'import/no-duplicates': 'warn',
			'import/no-unresolved': 'off',
			'import/order': [
				'error',
				{
					alphabetize: {
						order: 'asc',
						caseInsensitive: true
					},
					'newlines-between': 'never',
					groups: [
						'index',
						'sibling',
						'parent',
						'internal',
						'external',
						'builtin',
						'object',
						'type'
					]
				}
			]
		}
	}
];
