/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#f0fff5",
        foot: "#3d4451",
      },
    },
  },
  daisyui: {
    themes: false,
  },

  plugins: [require("flowbite/plugin"), require("daisyui")],
};
