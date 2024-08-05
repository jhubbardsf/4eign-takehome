/* eslint-disable import/default */
/* eslint-disable import/namespace */
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@schemas': 'src/lib/schemas'
		}
	},
	vitePlugin: {
		// set to true for defaults or customize with object
		inspector: {
			toggleKeyCombo: 'meta-shift',
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
