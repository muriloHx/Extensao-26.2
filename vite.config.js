import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { copyFileSync } from "node:fs";

export default defineConfig({
  base: '/',
  plugins: [
    vue(),

    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
      }
    },

    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: true
      },

      includeAssets: [
        "icon-192.png",
        "icon-512.png"
      ],

      manifest: {
        name: "Acesso Verificador",
        short_name: "Acesso",
        start_url: "/projects",
        scope: "/",
        display: "standalone",
        background_color: "#f6f8f6",
        theme_color: "#16784d",

        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },

      workbox: {
        navigateFallback: "/index.html"
      }
    })
  ]
});
