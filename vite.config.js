import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/your-subdomain/' ,// Set your preferred chunk size limit here in kB
    chunkSizeWarningLimit: 1000,
  }, // Change this to match your project name
})
