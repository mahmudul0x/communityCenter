import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { preset: "static" },
      prerender: {
        crawlLinks: true,
        routes: ["/", "/about", "/services", "/gallery", "/facilities", "/testimonials", "/booking", "/contact"],
      },
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});