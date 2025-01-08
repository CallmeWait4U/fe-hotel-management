import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'cream' : {
          DEFAULT: '#eeeeea',
        }, 
        'primary': {
          DEFAULT: '#FA9191',
          '1': '#febaba',
        },
        'secondary': {
          DEFAULT: '#c5a880',
        },
        'gold' : {
          DEFAULT: '#d4af37',
        }, 
        'dark' : {
          '1': '#b4b4b4',
          '2': '#787878',
          '3': '#616161',
          '4': '#3c3c3c',
        },
        'light' : {
          '1': '#f1f3f6',
        }
      },
      display: ["responsive"],
    },
  },
  plugins: [daisyui],
} satisfies Config;
