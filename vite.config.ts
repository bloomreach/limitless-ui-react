/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
    sourcemap: true,
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
  test: {
    passWithNoTests: true,
    coverage: {
      enabled: false,
      provider: 'istanbul',
      exclude: ['**/*.mock.ts'],
    },
  },
})
