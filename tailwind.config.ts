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

      boxShadow: {
        'inner-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
        'inner-xl': 'inset 0 20px 25px rgba(0, 0, 0, 0.1)',
      },

      colors: {
        base: '#f8fcff',
        message: '#F1F2F1',
        subtitle: '#403D39',
        title: '#252422',
        trend: '#1f1f1f',
      },

      maxHeight: {
        'px': '1000px', // Cambia 100px al valor deseado
      },



     



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
        'VT323': ['VT323'],
        
      },
    },
  },
  plugins: [],
};

export default config;
