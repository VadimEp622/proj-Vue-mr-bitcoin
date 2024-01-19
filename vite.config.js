import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/proj-Vue-mr-bitcoin/',
  plugins: [
    vue(),
    svgLoader()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/setup/_variables.scss";
          @import "./src/assets/styles/setup/_functions.scss";
          @import "./src/assets/styles/setup/_mixins.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
