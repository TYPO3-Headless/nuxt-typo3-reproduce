// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@t3headless/nuxt-typo3'],
    typo3: {
        api: {
          baseUrl: 'http://localhost:3000/api'
        },
        i18n: {
          default: 'en',
          locales: ['en', 'de', 'pl'],
        }
    },
    nitro: {
      devProxy: {
        '/api': {
          target: 'https://api.t3pwa.com/',
          secure: false,
          changeOrigin: true,
          preserveHeaderKeyCase: true
        }
      }
    }
})
