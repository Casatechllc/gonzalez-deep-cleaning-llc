import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [],
  
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Gonzalez Deep Cleaning LLC | Professional Cleaning Services',
      meta: [
        { name: 'description', content: 'Premium residential and commercial deep cleaning by Gladys.' }
      ]
    }
  },

  compatibilityDate: '2024-11-01'
})