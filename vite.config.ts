import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Serve from project root
  server: {
    port: 3000,
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
  },
});
