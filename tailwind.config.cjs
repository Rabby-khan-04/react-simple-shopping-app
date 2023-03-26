/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1C2B35",
          secondary: "#FF9900",
          accent: "#FFE0B3",
          neutral: "#FF3030",
          "base-100": "#FFFFFF",
          border: "95A0A7",
          text: "0E161A",
          warning: "#F9CB58",
          error: "#DE5745",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
