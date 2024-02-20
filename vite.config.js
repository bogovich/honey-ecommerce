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
          'react-vendor': ['react', 'react-dom'],
          'emotion-vendor': ['@emotion/react', '@emotion/styled', '@mui/material', '@mui/system'],
          'fontawesome-vendor': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'firebase-vendor': ['firebase/app', 'firebase/firestore/lite'],
          'router-vendor': ['react-router-dom', '@remix-run/router', 'react-router'],
        }
      }
    }
  }
})
