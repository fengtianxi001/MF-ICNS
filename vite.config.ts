import { fileURLToPath, URL } from "node:url";
import electron from "vite-plugin-electron";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: false, // 必须配置，否则electron相关文件将不会生成build后的文件
  },
  plugins: [
    vue(),
    vueJsx(),
    electron([
      {
        entry: "electron/index.ts",
        vite: {
          build: {
            sourcemap: false,
            outDir: "dist/electron",
          },
        },
      },
    ]),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "@/assets/styles/variable" as *;
          `,
      },
    },
  },
});
