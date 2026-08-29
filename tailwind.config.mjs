import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        desk: "#070d18",
        panel: "#0f1a2e",
        signal: "#ff2d2d",
        beam: "#3de0ff",
        chalk: "#e8eef7",
        mute: "#8b9bb4",
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Source Sans 3", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(61, 224, 255, 0.12)",
      },
    },
  },
  plugins: [typography],
};
