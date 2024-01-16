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
				malachite: {
					50: "#f0fdf3",
					100: "#dcfce3",
					200: "#bbf7c9",
					300: "#86efa0",
					400: "#30da5b",
					500: "#21c64c",
					600: "#15a43a",
					700: "#158031",
					800: "#16652b",
					900: "#145326",
					950: "#052e11",
				},
			},
		},
	},
	plugins: [],
}
