import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer"; // optional: bundle analyzer

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true })], // opens a bundle report after build
  build: {
    minify: "esbuild", // default minifier
    sourcemap: false,   // remove source maps in production to reduce size
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // separates all node_modules into vendor.js
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // optional, warns if chunk > 500KB
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // force optimization for faster dev start
  },
});
