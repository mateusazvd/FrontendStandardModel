import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"remote_vite",
      filename:"remoteEntry.js",
      exposes:{
        "./Button": "./src/Button",
      },
      shared:["react","react-dom"]
    })
  ],
  build:{
    modulePreload:false,
    target:"esnext",
    minify:false,
    cssCodeSplit:false
  }
})
