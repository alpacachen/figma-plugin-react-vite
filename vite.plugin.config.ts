import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: './src/plugin/index.ts',
      output: {
        dir: './dist',
        entryFileNames: 'plugin.js',
      },
    },
  },
})
