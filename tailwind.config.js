module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f5f6',
					100: '#ebebed',
					200: '#cccdd3',
					300: '#adafb8',
					400: '#707282',
					500: '#33364d',
					600: '#2e3145',
					700: '#26293a',
					800: '#1f202e',
					900: '#191a26',
				},
				secondary: {
					50: '#fef9f2',
					100: '#fdf3e6',
					200: '#f9e0bf',
					300: '#f5cd99',
					400: '#eea84d',
					500: '#e78200',
					600: '#d07500',
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
