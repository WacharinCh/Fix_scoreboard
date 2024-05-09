/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "neon-pink": "0px 0px 12px #FF69B4",

      "neon-blue": "0px 0px 4px #00BFFF",
      "neon-p": "0px 0px 3px 	#FF69B4",
      "neon-w": "0px 0px 5px 	#FFFFFF",
      "neon-y": "0px 0px 3px 	#FFFF00",
      "neon-r": "0px 0px 4px 	#FF0000",
      "neon-g": "0px 0px 3px 	#00ff00",
      none: "none",
    }, colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      "neon-pink": "#FF69B4",
      "neon-blue": "#00BFFF",
      "neon-white": "#FF69B4",
      "neon-w": "#FFFFFF",
      "neon-y": "#FFFF00",
      "neon-r": "#FF0000",
      "neon-g": "#00ff00",
      'ligthpink': '#FDA7B8',
      'darkpink': '#EC58B5',
      'discord': '#7289da',


    })
  },
  plugins: [],



}

