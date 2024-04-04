/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
        '2xl': '1280px',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-hover': 'inset 0 1px 0 0 rgba(148,163,184,.1)'
      }
    },
  },
  plugins: [],
}

