/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping your 60-30-10 CSS variables
        neutral: {
          background: 'var(--color-neutral-background)',
          surface: 'var(--color-neutral-surface)',
          text: 'var(--color-neutral-text)',
        },
        brand: {
          primary: 'var(--color-brand-primary)',
          light: 'var(--color-brand-light)',
          dark: 'var(--color-brand-dark)',
        },
        accent: {
          cta: 'var(--color-accent-cta)',
          hover: 'var(--color-accent-hover)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}