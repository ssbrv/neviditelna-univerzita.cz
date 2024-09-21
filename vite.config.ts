import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { parseBoolean } from "./src/utils/parsers";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  server:
    process.env.MODE === "prod"
      ? undefined
      : {
          host: true,
          port: process.env.VITE_CLIENT_PORT
            ? parseInt(process.env.VITE_CLIENT_PORT, 10)
            : 3000,
          watch: {
            usePolling: parseBoolean(process.env.VITE_USE_POLLING),
          },
        },
});
