/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // // // Light Mode // // / 
        // Backround
        "lbp": "#ffffff",
        "lbs": "#f0f0ff",
        "lbh": "#1E2022",
        // Action
        "lap": "#d5e2f1",
        "las": "#e7f0f8",
        // Foreground
        "lfp": "#232b39",
        "lfs": "#697586",
        "lft": "#a2b0c3",

        // accent
        "accent": "#950101",
        "daccent": "#950101",

        // // // Dark Mode // // / 
        // Backround
        "dbp": "#393E46",
        "dbs": "#222831",
        "dbh": "#1E2022",
        // Action
        "dap": "#d5e2f1",
        "das": "#2d3748",
        // Foreground
        "dfp": "#edf2f7",
        "dfs": "#ccd6e0",
        "dft": "#a0aec0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }

      },
      screens: {
        'xs': '550px',
        // => @media (min-width: 550px) { ... }

        'sm': '650px',
        // => @media (min-width: 650px) { ... }
      }
    },
  },
  plugins: [],
}