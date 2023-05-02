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
        bar: "#f0fff5",
        btnNav: "rgba(126, 144, 254, 1)",
        btnBar: "rgba(152, 115, 255, 1)",
        bgJobIcon: "rgba(152, 115, 255, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
