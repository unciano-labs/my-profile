import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EF",
        paper: "#FFFFFF",
        sand: "#F5ECDB",
        sage: "#ECF1E8",
        ink: "#26221A",
        "ink-soft": "#4C4636",
        pine: {
          DEFAULT: "#1E5A3E",
          dark: "#16452F",
          deep: "#123227",
          night: "#0C241B",
        },
        amber: {
          DEFAULT: "#E9A13B",
          soft: "#F4D9A8",
        },
        brick: "#B3261E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        body: [
          "var(--font-body)",
          '"Atkinson Hyperlegible"',
          "Verdana",
          "sans-serif",
        ],
        hand: ["var(--font-hand)", "Caveat", "cursive"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
