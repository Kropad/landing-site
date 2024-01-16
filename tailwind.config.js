/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte}"],
	theme: {
		extend: {
			fontFamily: {
				manrope: "'Manrope', sans-serif",
			},
			height: {
				13: "3.25rem",
			},
			width: {
				13: "3.25rem",
			},
			colors: {
				green: {
					50: "#f1fcf2",
					100: "#defae2",
					200: "#bff3c6",
					300: "#8ce99a",
					400: "#5bd76d",
					500: "#2cbb42",
					600: "#1f9a31",
					700: "#1b7a2a",
					800: "#1b6026",
					900: "#184f22",
					950: "#072c0e",
				},
			},
		},
	},
	plugins: [],
}
