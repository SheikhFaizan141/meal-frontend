import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  // https://vitejs.dev/config/shared-options.html#define
  define: {
    "__API_URL__": JSON.stringify('http://127.0.0.1:8000'),
  },
});