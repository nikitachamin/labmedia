import { defineConfig } from 'vite';

export default defineConfig({
  // Указываем корневую папку (src)
  root: 'src',
  // Настройки для SCSS
  css: {
    preprocessorOptions: {
      scss: {
   
      },
    },
  },
});