/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#5145F1',         // Vibrant Indigo (Primary)
        'brand-accent': '#0F172A',  // Deep Navy (Heading text)
        'brand-mute': '#EEF2FF',    // Soft Lavender (Highlights)
        'brand-bg': '#F8FAFC',      // Light Slate (Background)
      },
    },
  },
  plugins: [],
}