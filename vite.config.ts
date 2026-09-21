import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/Yatra-Sahayak-2.1/",

  tanstackStart: {
    server: {
      entry: "server",
    },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
        crawlLinks: false,
      },
    },
  },
});
