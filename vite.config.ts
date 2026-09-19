import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Nitro for GitHub Pages.
  // GitHub Pages can host static files but cannot run the TanStack server.
  nitro: false,

  tanstackStart: {
    server: { entry: "server" },

    // Generate a static index.html for GitHub Pages
    prerender: {
      enabled: true,
      crawlLinks: true,
    },

    pages: [
      { path: "/" },
    ],
  },
});
