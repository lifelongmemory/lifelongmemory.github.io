const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "display-md": ["clamp(2.75rem, 3.47vw + 1.68rem, 6.25rem)", { lineHeight: "1", letterSpacing: "-0.01em", fontWeight: "800" }],
        h1: ["clamp(2.5rem, 1.23vw + 2.17rem, 3.75rem)", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["clamp(2rem, 0.98vw + 1.74rem, 3rem)", { lineHeight: "1.17", fontWeight: "700" }],
        h3: ["clamp(1.75rem, 0.74vw + 1.5rem, 2.5rem)", { lineHeight: "1.2", fontWeight: "400" }],
        h5: ["clamp(1.25rem, 0.49vw + 1.05rem, 1.75rem)", { lineHeight: "1.3", fontWeight: "500" }],
        h6: ["clamp(1.25rem, 0.25vw + 1.18rem, 1.5rem)", { lineHeight: "1.17", letterSpacing: "-0.48px", fontWeight: "400" }],
        "body-lg": ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.625", letterSpacing: "-0.08px", fontWeight: "400" }],
      },
      colors: {
        "text-heading": "#151211",
        "text-body": "#2c2827",
        "text-body-light": "#787270",
        "bg-secondary": "#f4f3f3",
        "surface-page": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
