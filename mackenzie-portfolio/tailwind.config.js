/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3ED",
        ink: "#171512",
        signal: "#2A3AFF",
        line: "#D9D4C8",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        "hero-sm": ["3.25rem", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "hero-lg": ["8.5rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
      },
    },
  },
  plugins: [],
};
