/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        rausch: "#e8384f",
        "rausch-dark": "#c82e42",
        ink: "#1a1a1a",
        "ink-soft": "#383838",
        muted: "#717171",
        line: "#e4e4e4",
        surface: "#f8f8f8",
        chip: "#f2f2f2"
      },
      fontFamily: {
        sans: [
          "Outfit",
          "-apple-system",
          "system-ui",
          "sans-serif"
        ]
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.625rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2.5rem",
        full: "9999px"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)",
        lift: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        strong: "0 20px 56px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)"
      }
    }
  },
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
