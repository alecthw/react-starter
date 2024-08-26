import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [mockDevServerPlugin(), react()],

  esbuild:
    command === 'serve'
      ? undefined
      : {
          drop: ['console', 'debugger'],
        },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react-core': ['react', 'react-dom'],
          'vendor-react-3rd': ['history', 'react-intl', 'react-router-dom'],
          'vendor-react-redux': [
            '@reduxjs/toolkit',
            'react-redux',
            'redux-first-history',
          ],
          'vendor-lib': ['dayjs', 'rodash', 'web-vitals'],
        },
      },
    },
  },

  server: {
    proxy: {
      '^/api': { target: 'http://example.com' },
    },
  },
}));
