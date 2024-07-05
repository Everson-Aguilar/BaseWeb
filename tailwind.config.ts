// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Acme': ['Acme-Regular', 'sans-serif'],
        'BebasNeue': ['BebasNeue-Regular', 'sans-serif'],
        'Jacquard12': ['Jacquard12-Regular', 'sans-serif'],
        'LibreBarcode128': ['LibreBarcode128-Regular', 'sans-serif'],
        'Notable': ['Notable-Regular', 'sans-serif'],
        'NotoEmoji': ['NotoEmoji-VariableFont_wght', 'sans-serif'],
        'PermanentMarker': ['PermanentMarker-Regular', 'sans-serif'],
        'SixCaps': ['SixCaps-Regular', 'sans-serif'],
        'Staatliches': ['Staatliches-Regular', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
