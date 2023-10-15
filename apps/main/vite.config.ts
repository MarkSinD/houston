import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3000,  // Set your desired port here
		strictPort: true,  // Exit if the port is already in use
		proxy: {
			'/api/Game': {
				target: 'http://localhost:7001/api/Game',
			},
			'/gamehub': {
				target: 'http://localhost:7021/gamehub',
			},
		},
	}
})
