import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      theme: path.resolve("src/theme"),
      pages: path.resolve("src/pages"),
      assets: path.resolve("src/assets"),
      components: path.resolve("src/components"),
    },
  },
  plugins: [react()],
});
