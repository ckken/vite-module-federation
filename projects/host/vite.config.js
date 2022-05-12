import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'emp.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    host: true,
    port: 3002,
  },
  preview: {
    host: true,
    port: 3002,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        // manualChunks: {
        //   react: ['react', 'react-dom'],
        // },
      },
    },
  },
})
