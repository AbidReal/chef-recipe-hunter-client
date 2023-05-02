/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "rgba(126, 144, 254, 0.05)",
        bar: "rgba(152, 115, 255, 0.05)",
        btnNav: "rgba(126, 144, 254, 1)",
        btnBar: "rgba(152, 115, 255, 1)",
        bgJobIcon: "rgba(152, 115, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
