import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Indispensable pour que Vite réponde en dehors de son conteneur Docker
    allowedHosts: [
        'localhost',
        'frontend' 
    ],
    proxy: {
        '/api': {
            target: process.env.VITE_API_TARGET || 'http://backend-auth:8000',
            changeOrigin: true,
        },
    }, // <-- On ferme le proxy ICI
    hmr: {
      protocol: 'wss',
      host: 'localhost',
      clientPort: 443 // Force le client dans le navigateur à pointer sur https://localhost:443
    },
  }
})