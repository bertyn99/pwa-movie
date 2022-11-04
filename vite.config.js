import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["movie.svg"],
      manifest: {
        name: "Movie Finder",
        short_name: "MFinder",
        description: "Help you to search information about a movie",
        theme_color: "#fb923c",
        icons: [
          {
            src: "movie.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "movie.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
});
