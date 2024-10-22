/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'Bloomreach',
      entry: './src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@bloomreach/discovery-web-sdk'],
    },
    sourcemap: true,
  },
  plugins: [react(), dts({ insertTypesEntry: true, rollupTypes: true })],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    passWithNoTests: true,
    coverage: {
      enabled: false,
      provider: 'istanbul',
      include: ['src'],
      exclude: ['**/*/*.stories.*', '**/*.mock.ts'],
    },
    include: ['**/*.spec.ts?(x)'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
