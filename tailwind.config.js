module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#86b3f7',
					100: '#5e9af4',
					200: '#3681f1',
					300: '#1068eb',
					400: '#0e56c3',
					500: '#0b449b',
					600: '#083170',
					700: '#072d66',
					800: '#062759',
					900: '#05224c',
				},
				secondary: {
					50: '#fae2c4',
					100: '#f8d9b0',
					200: '#f6cf9c',
					300: '#f4c689',
					400: '#f2bc75',
					500: '#f0b261',
					600: '#eea84d',
					700: '#ad6200',
					800: '#8b4e00',
					900: '#714000',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
