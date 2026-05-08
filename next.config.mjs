/** @type {import('next').NextConfig} */
  const nextConfig = {
    /* config options here */
  };
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#5145F1',        // Vibrant Indigo (Primary)
        'brand-accent': '#0F172A', // Deep Navy (Heading text)
        'brand-mute': '#EEF2FF',   // Soft Lavender (Highlights)
        'brand-bg': '#F8FAFC',     // Light Slate (Background)
      },
    },
  },
}

export default nextConfig;
