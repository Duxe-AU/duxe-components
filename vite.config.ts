import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path';
import preserveDirectives from "rollup-plugin-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DuxeComponents",
      formats: ["es"],
      fileName: "index.[format].js"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].[format].js",
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'modern-normalize': 'modern-normalize',
        },
        inlineDynamicImports: false,
        preserveModules: true,
      },
      preserveEntrySignatures: 'allow-extension',
      plugins: [preserveDirectives()],
    },
    sourcemap: true,
    emptyOutDir: true,
  }
})
