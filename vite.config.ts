import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // Change this address if your API is not in local or in port 4000.
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
});
