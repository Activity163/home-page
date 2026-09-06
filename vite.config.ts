import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {

      base: '/',

      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            // Split large vendor libs into separate chunks for parallel download
            // and better long-term caching.
            manualChunks: (id) => {
              if (id.includes('node_modules')) {
                if (id.includes('lucide-react')) {
                  return 'vendor-lucide';
                }
                if (id.includes('react') || id.includes('scheduler')) {
                  return 'vendor-react';
                }
                return 'vendor';
              }
            }
          }
        }
      }
    };
});
