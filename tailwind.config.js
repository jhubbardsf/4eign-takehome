import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { feignTheme } from './4eign-theme';

// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			// colors: {
			// 	'light-blue': '#D7EEFD',
			// 	blue: '#46B2F6'
			// }
		}
	},
	plugins: [
		forms,
		// 4. Append the Skeleton plugin (after other plugins)
		// skeleton({ themes: { custom: [feignTheme] } })
		skeleton({ themes: { preset: ['skeleton'] } })

	]
};
