/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode:"class",
	theme: {
		extend: {
			backgroundColor: {
				low: "#60a5fa",
				medium: "#facc15",
				high: "#f87171",
			},
		},
	},
	plugins: [],
};
