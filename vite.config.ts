import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: './src/types/auto-imports.d.ts' // 指定类型声明文件，为true时在项目根目录创建
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true, // 组件名称包含目录，防止同名组件冲突
      dts: './src/types/components.d.ts' // 指定类型声明文件，为true时在项目根目录创建
    })
  ],

  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      '@': path.join(__dirname, './src') // path记得引入
      // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  }
})
