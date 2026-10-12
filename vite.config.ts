import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [reactRouter()],
  build: {
    target: 'es2015'
  },
  server: {
    host: true,
    watch: {
      ignored: ['**/build/**', '**/rendered_page.html', '**/*.cjs']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
});

