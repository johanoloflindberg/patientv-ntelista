import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  root: fileURLToPath(new URL("./verification", import.meta.url)),
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^anima-project\/styles\.css$/,
        replacement: fileURLToPath(
          new URL("./dist/styles.css", import.meta.url),
        ),
      },
      {
        find: /^anima-project$/,
        replacement: fileURLToPath(new URL("./dist/index.js", import.meta.url)),
      },
    ],
  },
  build: {
    outDir: fileURLToPath(new URL("./dist-consumer", import.meta.url)),
    emptyOutDir: true,
  },
});
