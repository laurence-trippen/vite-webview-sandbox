import path from "path"
import url from "url"

import { defineConfig } from "vite"


const __dirname = path.dirname(url.fileURLToPath(import.meta.url))


export default defineConfig({
  base: "/vite-webview-sandbox",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        tts: path.resolve(__dirname, "tts.html"),
        blob: path.resolve(__dirname, "blob.html"),
      },
    },
  },
})
