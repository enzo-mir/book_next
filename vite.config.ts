import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      "@css": path.resolve(__dirname, "./src/css"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@public": path.resolve(__dirname, "./public"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@provider": path.resolve(__dirname, "./src/provider"),
      "@locales": path.resolve(__dirname, "./src/locales"),
    },
  },
});
