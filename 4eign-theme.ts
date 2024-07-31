import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const feignTheme: CustomThemeConfig = {
	name: '4eign-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-tertiary-500)',
		'--on-secondary': 'var(--color-tertiary-500)',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': 'var(--color-tertiary-500)',
		// =~= Theme Colors  =~=
		// primary | #D7EEFD
		'--color-primary-50': '249 252 255', // #f9fcff
		'--color-primary-100': '247 252 255', // #f7fcff
		'--color-primary-200': '245 251 255', // #f5fbff
		'--color-primary-300': '239 248 254', // #eff8fe
		'--color-primary-400': '227 243 254', // #e3f3fe
		'--color-primary-500': '215 238 253', // #D7EEFD
		'--color-primary-600': '194 214 228', // #c2d6e4
		'--color-primary-700': '161 179 190', // #a1b3be
		'--color-primary-800': '129 143 152', // #818f98
		'--color-primary-900': '105 117 124', // #69757c
		// secondary | #46B2F6
		'--color-secondary-50': '227 243 254', // #e3f3fe
		'--color-secondary-100': '218 240 253', // #daf0fd
		'--color-secondary-200': '209 236 253', // #d1ecfd
		'--color-secondary-300': '181 224 251', // #b5e0fb
		'--color-secondary-400': '126 201 249', // #7ec9f9
		'--color-secondary-500': '70 178 246', // #46B2F6
		'--color-secondary-600': '63 160 221', // #3fa0dd
		'--color-secondary-700': '53 134 185', // #3586b9
		'--color-secondary-800': '42 107 148', // #2a6b94
		'--color-secondary-900': '34 87 121', // #225779
		// tertiary | #565F65
		'--color-tertiary-50': '230 231 232', // #e6e7e8
		'--color-tertiary-100': '221 223 224', // #dddfe0
		'--color-tertiary-200': '213 215 217', // #d5d7d9
		'--color-tertiary-300': '187 191 193', // #bbbfc1
		'--color-tertiary-400': '137 143 147', // #898f93
		'--color-tertiary-500': '86 95 101', // #565F65
		'--color-tertiary-600': '77 86 91', // #4d565b
		'--color-tertiary-700': '65 71 76', // #41474c
		'--color-tertiary-800': '52 57 61', // #34393d
		'--color-tertiary-900': '42 47 49', // #2a2f31
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #D7EEFD
		'--color-surface-50': '249 252 255', // #f9fcff
		'--color-surface-100': '247 252 255', // #f7fcff
		'--color-surface-200': '245 251 255', // #f5fbff
		'--color-surface-300': '239 248 254', // #eff8fe
		'--color-surface-400': '227 243 254', // #e3f3fe
		'--color-surface-500': '215 238 253', // #D7EEFD
		'--color-surface-600': '194 214 228', // #c2d6e4
		'--color-surface-700': '161 179 190', // #a1b3be
		'--color-surface-800': '129 143 152', // #818f98
		'--color-surface-900': '105 117 124' // #69757c
	}
};
