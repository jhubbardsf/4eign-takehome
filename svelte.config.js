/* eslint-disable import/default */
/* eslint-disable import/namespace */
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@schemas': 'src/lib/generated-schemas/schemas'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
