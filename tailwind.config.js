/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'poppins-regular': ['Poppins_400Regular'],
      'poppins-medium': ['Poppins_500Medium'],
      'poppins-semibold': ['Poppins_600SemiBold'],
      'poppins-bold': ['Poppins_700Bold'],
      'poppins-extrabold': ['Poppins_800ExtraBold'],
      'rubik-light': ['Rubik_300Light'],
      'rubik-regular': ['Rubik_400Regular'],
      'rubik-medium': ['Rubik_500Medium'],
      'rubik-semibold': ['Rubik_600SemiBold'],
      'rubik-bold': ['Rubik_700Bold'],
      'rubik-extrabold': ['Rubik_800ExtraBold'],
      'rubik-black': ['Rubik_900Black'],
    },
    extend: {},
  },
  plugins: [],
}
