import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://thefredcode-api.onrender.com',
        target: 'http://localhost:1900',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: Infinity,}
})
