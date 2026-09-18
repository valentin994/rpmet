const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				primary: '#6E9761',
				'primary-deep': '#3F5A38',
				copper: '#B5652D',
				ink: '#1F2A24',
				paper: '#F6F5F0',
				slate: '#7C8983'
			}
		}
	},
	plugins: []
};
