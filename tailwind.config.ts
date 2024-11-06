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


      animation: {
        'slow-spin': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 8s linear infinite',
      },

      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },




      boxShadow: {
        'inner-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
        'inner-xl': 'inset 0 20px 25px rgba(0, 0, 0, 0.1)',
      },

      colors: {
        message: '#F1F2F1',
        subtitle: '#403D39',
        title: '#252422',
        trend: '#1f1f1f',
        colorBase: '#f8fcff',
      },

      scale: {
        '150': '1.5',    // 150%
        '200': '2',      // 200%
        '250': '2.5',    // 250%
        '300': '3',      // 300%
        '350': '3.5',    // 350%
        '400': '4',      // 400%
        
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
