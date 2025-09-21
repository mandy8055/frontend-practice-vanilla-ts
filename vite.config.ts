import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Serve from project root
  server: {
    port: 3000,
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        // Manually add each component - update this as you add more
        'components/01-cta-button/index': 'components/01-cta-button/index.html',
        'components/02-loader-spinner/index':
          'components/02-loader-spinner/index.html',
      },
    },
  },
});
