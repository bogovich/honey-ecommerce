import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  esbuild: { legalComments: 'external' },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom', 'react-router-dom', '@remix-run/router', 'react-router'],
          'vendor': ['@mui/material', '@mui/system', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          'firebase': ['firebase/app', 'firebase/firestore/lite']
        }
      }
    }
}
})
