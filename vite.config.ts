import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
// import { fileURLToPath, URL } from 'node:url'
import path from 'path'

const baseURL = 'localhost:3000' // 开发环境
const https = false
// const prodMock = true // 是否开启生产环境mock
const prefix = https ? 'https://' : 'http://'
// const prefix = 'http://'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量

  return defineConfig({
    server: {
      host: 'localhost',
      port: 9000,
      proxy: {
        '/api': {
          target: prefix + env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
        exclude: ['./node_modules']
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
        // eslint报错解决
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
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
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import './src/assets/css/variables.scss';"
        }
      }
    }
  })
}
