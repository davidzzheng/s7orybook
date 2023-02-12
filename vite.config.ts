import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.cjs"),
    },
  },
  optimizeDeps: {
    include: ["tailwind-config"],
  },
  build: {
    commonjsOptions: {
      include: ["tailwind.config.cjs", "node_modules/**"],
    },
  },
});
