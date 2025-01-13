// https://vite.dev/config/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@types': '/src/types/',
    },
  },
  css: {
    modules: {
      localsConvention: 'dashesOnly', // Ensures class names follow the dashes-only convention
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/lib.scss" as *;`,
      },
    },
    devSourcemap: true, // Enable source maps for CSS
  },
});
