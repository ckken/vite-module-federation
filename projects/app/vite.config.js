import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      filename: 'emp.js',
      exposes: {
        './App': './src/App.tsx',
      },
      remotes: {
        host: 'http://172.29.181.111:3001/emp.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    host: true,
    port: 3001,
  },
  preview: {
    host: true,
    port: 3001,
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         react: ['react'],
  //         reactDom:['react-dom']
  //       },
  //     },
  //   },
  // },
})
