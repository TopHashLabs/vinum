import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import pluginEnv from 'vite-plugin-vue-env'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    vue({ reactivityTransform: true }),
    pluginEnv({
      //TODO: Update before using in mainnet
      CONTRACT_ADDRESS: '0xC51f5eb58a07B8579c97d0176A2F80Cd580158BB',
      DEFAULT_CHAIN_ID: '3',
      GTAG_ID: 'G-XWG00GFSWX'
    }),
    ViteComponents(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util'
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
    exclude: ['vue-demi']
  }
})
