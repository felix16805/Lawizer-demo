// tailwind.config.js — Tailwind CSS configuration file
// This tells Tailwind which files to scan for class names.
// Any class found in these files will be included in the final CSS bundle.
// Classes NOT found here are stripped out (tree-shaking), keeping CSS small.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // Scan the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}" // Scan all JS/JSX/TS/TSX files inside src/
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here.
      // Example: add a custom color, font family, or breakpoint.
      // fontFamily: {
      //   sans: ["YourFont", "sans-serif"],
      // },
    },
  },
  plugins: [
    // Add Tailwind plugins here (e.g. @tailwindcss/forms, @tailwindcss/typography)
  ],
};
