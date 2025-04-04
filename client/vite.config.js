import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // <-- or just remove this line entirely
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
