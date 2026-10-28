/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#090B10",          // Minimal dark theme base #090B10
        "dark-surface": "#0D1117",   // Secondary dark surface
        "card-bg": "#111726",        // Card background
        secondary: "#94A3B8",        // Secondary text: Slate-400
        tertiary: "#141C2B",         // Elevated card background
        "dark-gray": "#0D1117",      
        "border-dark": "#1C2538",    // Subtle dark border
        "border-highlight": "#2E3D5B",// Active/hover border
        "muted-gray": "#64748B",     // Muted text: Slate-500
        "text-primary": "#F1F5F9",   // Crisp text: Slate-100
        "accent-blue": "#38BDF8",    // Sky-400 subtle blue accent
        "accent-deep": "#3B82F6",    // Blue-500 deep accent
        "accent-glow": "rgba(56, 189, 248, 0.15)",
        "black-100": "#0D1117",
        "black-200": "#111726",
        "white-100": "#F1F5F9",
      },
      borderColor: {
        DEFAULT: "#1C2538",
        border: "#1C2538",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(2, 6, 23, 0.7), 0 0 0 1px #1C2538",
        "card-hover": "0 20px 40px -15px rgba(2, 6, 23, 0.9), 0 0 0 1px #38BDF840, 0 0 25px rgba(56, 189, 248, 0.1)",
        "blue-glow": "0 0 25px rgba(56, 189, 248, 0.2)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
