module.exports = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    screens: {
      sm: "640px",
      md: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
