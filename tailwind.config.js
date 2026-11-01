/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Cactus & Clay brand kit. "rausch" keeps its class name but is now Clay.
        rausch: "#B5532F",
        "rausch-dark": "#96421F",
        ink: "#2A2320",
        "ink-soft": "#4A3F38",
        muted: "#6B6057",
        line: "#DFD3C1",
        surface: "#EFE6D8",
        chip: "#EBE2D3",
        paper: "#F8F4EE",
        cardon: "#3E5A45",
        clay: "#B5532F",
        cantera: "#EFE6D8",
        mesquite: "#2A2320",
        agave: "#8FB39A",
        dune: "#C9A77C"
      },
      fontFamily: {
        sans: [
          "Inter",
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
