/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue,astro}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'sans': ['Parkinsans', 'sans-serif'],
			},
			colors: {
				'orange-accent-1': '#DD8938',
				'orange-accent-2': '#BD8B5B',
				'green-accent-1': '#5F6456',
				'purple-accent-1': '#382934',
				'pink-accent-1': '#FAA0A0',
				'pink-accent-2': '#905547',
				'pink-accent-3': '#e9a492',
				'pink-accent-4' : '#A95C68',
				'yellow-sticky-note': '#EBDF9A',
				'blue-sticky-note': '#B6D0E2',
				'green-sticky-note': '#A5D6A7',
				'pink-sticky-note': '#F48FB1',
			}
		},
	},
	plugins: ['flowbite/plugin'],
}
