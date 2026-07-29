// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         base: "#0B0B10",
//         panel: "#14141C",
//         line: "rgba(255,255,255,0.08)",
//         muted: "#9CA3AF",
//       },
//       fontFamily: {
//         sans: ["var(--font-inter)", "sans-serif"],
//       },
//       boxShadow: {
//         glow: "0 0 60px -15px rgba(139, 92, 246, 0.35)",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: 0, transform: "translateY(12px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         fadeUp: "fadeUp 0.6s ease-out forwards",
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0B10",
        panel: "#14141C",
        line: "rgba(255,255,255,0.08)",
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(139, 92, 246, 0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};