import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],

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
