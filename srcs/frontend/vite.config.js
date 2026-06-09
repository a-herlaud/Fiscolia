import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
	allowedHosts: [
		'localhost' ,
		'frontend' 
	],
	proxy: {
		'/api': {
			target: process.env.VITE_API_TARGET || 'http://backend-auth:8000',
			changeOrigin: true,
		},
	},
	}
})