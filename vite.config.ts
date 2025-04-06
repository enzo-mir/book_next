import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    base: "./",
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) {
                return "vendor-react";
              }
              if (id.includes("framer-motion")) {
                return "vendor-framer-motion";
              }
              if (id.includes("lodash") || id.includes("ramda")) {
                return "vendor-utils";
              }
              if (id.includes("react-router-dom")) {
                return "vendor-router";
              }
              if (id.includes("axios") || id.includes("fetch")) {
                return "vendor-api";
              }
              if (id.includes("i18next")) {
                return "vendor-i18n";
              }

              return "vendor";
            }

            // Split your own code by feature
            if (id.includes("src/pages")) {
              const page = id.split("pages/")[1].split("/")[0];
              return `page-${page}`;
            }

            if (id.includes("src/components")) {
              const component = id.split("components/")[1].split("/")[0];
              return `component-${component}`;
            }

            if (id.includes("src/hooks")) {
              return "hooks";
            }

            if (id.includes("src/services")) {
              return "services";
            }

            if (id.includes("src/utils")) {
              return "utils";
            }
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },

    server: {
      port: parseInt(process.env.VITE_PORT as string),
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
};
