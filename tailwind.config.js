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
		},
	},
	plugins: [],
}
