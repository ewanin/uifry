/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashRegular: ["ClashRegular", "sans-serif"],
        clashMedium: ["ClashMedium", "sans-serif"],
        clashSemibold: ["ClashSemibold", "sans-serif"],
        clashBold: ["ClashBold", "sans-serif"],
      },
      colors: {
        pink: '#FF5555'
      },
      backgroundImage: {
        readyBanner: 'url(/readyBannerImage.png)'
      }
    },
  },
  plugins: [],
};
