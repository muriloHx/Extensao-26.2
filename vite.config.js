import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: '/Extensao-26.2/',
  plugins: [
    vue(),

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
        start_url: "/Extensao-26.2/projects",
        scope: "/Extensao-26.2/",
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
        navigateFallback: "/Extensao-26.2/index.html"
      }
    })
  ]
});
