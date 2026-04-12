import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Define o CSS final como legível/expandido
        style: 'expanded',
      }
    }
  },
  build: {
    // Define o limite de tamanho para "inline" como 0
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Organiza os arquivos JS
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        // Organiza o CSS e outros assets (imagens, fontes)
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          // Retorna a pasta baseada na extensão: css/style.css ou img/logo.png
          return `${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
});