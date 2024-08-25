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

  server: {
    proxy: {
      '^/api': { target: 'http://example.com' },
    },
  },
}));
