import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
const externals = ['host/App']
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
        host: {
          external: 'http://localhost:3002/assets/emp.js',
          format: 'esm',
        },
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  optimizeDeps: {
    exclude: externals,
    esbuildOptions: {
      external: externals,
    },
  },
  server: {
    host: true,
    port: 3001,
  },
  preview: {
    host: true,
    port: 3001,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: externals,
      // output: {
      //   manualChunks: {
      //     react: ['react'],
      //     reactDom:['react-dom']
      //   },
      // },
    },
  },
})
