import { defineConfig } from 'vite';

export default defineConfig({
  // base relativo './' garantiza compatibilidad tanto en raíz como en subdirectorios de GitHub Pages
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    open: true
  }
});
