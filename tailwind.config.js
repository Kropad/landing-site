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
					200: "#bef4c5",
					300: "#8ce999",
					400: "#49d45d",
					500: "#2bbc40",
					600: "#1e9b30",
					700: "#1b7a29",
					800: "#1a6125",
					900: "#175021",
					950: "#072c0e",
				},
			},
		},
	},
	plugins: [],
}
