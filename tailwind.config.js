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

        // Oder
        "accent": "#950101",
        "daccent": "#5b0404",
        "orange": "#d73210",
        "dorange": "#90200a",

        // List Color
        "llist": "#363636",
        "dlist": "#2F2F2F",

        // // // Dark Mode // // / 
        // Backround
        "dbp": "#2a2a2a",
        "dbs": "#1a1a1a",
        "dbh": "#000000",
        // Action
        "dap": "#d5e2f1",
        "das": "#2a2a2a",
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
  plugins: [require('tailwind-scrollbar-hide')],
}