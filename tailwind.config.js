/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#00021c',
      'darkblue': '#014565',
      'medblue': '#005877',
      'teal': '#24ddda',
      'peach': '#fba96a',
      'navy': '#35487f',
      'cream': '#f0eed3',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        custom: ['Madimi']
      },
    },
  },
  plugins: [],
}

