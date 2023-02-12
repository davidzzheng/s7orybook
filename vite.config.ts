import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

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
