/** @type {import('tailwindcss').Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  important: true,
  theme: {
    screens: {
      smx: '375px',
      xs: '392px',
      sml: '500px',
      sm: '600px',
      // => @media (min-width: 600px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        sx: '0px 5px 16px rgba(8, 15, 52, 0.06)',
        sm: '0px 2px 6px rgba(19, 18, 66, 0.07)',
        lg: '0px 2px 11px rgba(69, 65, 164, 0.06)',
        xl: 'inset 0px -3px 7px rgba(20, 20, 43, 0.08)',
      },
    },
  },
  plugins: [],
}
