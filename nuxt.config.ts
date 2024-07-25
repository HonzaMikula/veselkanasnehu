// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  css: ['@/node_modules/scss-reset/src/scss/_reset.scss', '@/assets/styles/typography.sass','@/assets/styles/layout.sass'],
  
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/styles/config.sass" as *\n'
        }
      }
    }
  },

  webpack: {
    extractCSS: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'Veselka na ❄️ sněhu',
      meta: [
        { name: 'description', content: '👰 Svatba Mikyho a Veru ❄️' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=3, user-scalable=yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    }
  },
   
})
