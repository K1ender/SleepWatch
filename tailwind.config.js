/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#40F09C",
				bg: "#262626",
				white: "#F8F8F8",
			},
		},
	},
	plugins: [],
};
