// vite.config.ts
import { defineConfig } from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/vite/dist/node/index.js'
import AutoImport from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/unplugin-auto-import/dist/vite.js'
import vue from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import Components from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/unplugin-vue-components/dist/vite.js'
import { ElementPlusResolver } from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/unplugin-vue-components/dist/resolvers.js'
import eslintPlugin from 'file:///D:/HUAN/self-study/Blog/blog_web/node_modules/vite-plugin-eslint/dist/index.mjs'
import path from 'path'
var __vite_injected_original_dirname = 'D:\\HUAN\\self-study\\Blog\\blog_web'
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules']
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      // eslint报错解决
      eslintrc: {
        enabled: false,
        // Default `false`
        filepath: './.eslintrc-auto-import.json',
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './src/types/auto-imports.d.ts'
      // 指定类型声明文件，为true时在项目根目录创建
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true,
      // 组件名称包含目录，防止同名组件冲突
      dts: './src/types/components.d.ts'
      // 指定类型声明文件，为true时在项目根目录创建
    })
  ],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      '@': path.join(__vite_injected_original_dirname, './src')
      // path记得引入
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
export { vite_config_default as default }
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxIVUFOXFxcXHNlbGYtc3R1ZHlcXFxcQmxvZ1xcXFxibG9nX3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSFVBTlxcXFxzZWxmLXN0dWR5XFxcXEJsb2dcXFxcYmxvZ193ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0hVQU4vc2VsZi1zdHVkeS9CbG9nL2Jsb2dfd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZXNsaW50UGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IFsnc3JjLyoqLyouanMnLCAnc3JjLyoqLyoudnVlJywgJ3NyYy8qKi8qLnRzJ10sXG4gICAgICBleGNsdWRlOiBbJy4vbm9kZV9tb2R1bGVzJ11cbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJ10sXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgICAgLy8gZXNsaW50XHU2MkE1XHU5NTE5XHU4OUUzXHU1MUIzXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8gRGVmYXVsdCBgZmFsc2VgXG4gICAgICAgIGZpbGVwYXRoOiAnLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbicsIC8vIERlZmF1bHQgYC4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb25gXG4gICAgICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUgLy8gRGVmYXVsdCBgdHJ1ZWAsICh0cnVlIHwgZmFsc2UgfCAncmVhZG9ubHknIHwgJ3JlYWRhYmxlJyB8ICd3cml0YWJsZScgfCAnd3JpdGVhYmxlJylcbiAgICAgIH0sXG4gICAgICBkdHM6ICcuL3NyYy90eXBlcy9hdXRvLWltcG9ydHMuZC50cycgLy8gXHU2MzA3XHU1QjlBXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTNBdHJ1ZVx1NjVGNlx1NTcyOFx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NTIxQlx1NUVGQVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGRpcmVjdG9yeUFzTmFtZXNwYWNlOiB0cnVlLCAvLyBcdTdFQzRcdTRFRjZcdTU0MERcdTc5RjBcdTUzMDVcdTU0MkJcdTc2RUVcdTVGNTVcdUZGMENcdTk2MzJcdTZCNjJcdTU0MENcdTU0MERcdTdFQzRcdTRFRjZcdTUxQjJcdTdBODFcbiAgICAgIGR0czogJy4vc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50cycgLy8gXHU2MzA3XHU1QjlBXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTNBdHJ1ZVx1NjVGNlx1NTcyOFx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NTIxQlx1NUVGQVxuICAgIH0pXG4gIF0sXG5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAvLyBcdThGRDlcdTkxQ0NcdTVDMzFcdTY2MkZcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkVyZXNvbHZlXHU5MUNDXHU3Njg0XHU1MjJCXHU1NDBEXG4gICAgICAnQCc6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NyYycpIC8vIHBhdGhcdThCQjBcdTVGOTdcdTVGMTVcdTUxNjVcbiAgICAgIC8vICd2dWUnOiAndnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzJyAvLyBcdTVCOUFcdTRFNDl2dWVcdTc2ODRcdTUyMkJcdTU0MERcdUZGMENcdTU5ODJcdTY3OUNcdTRGN0ZcdTc1MjhcdTUxNzZcdTRFRDZcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdTUzRUZcdTgwRkRcdTRGMUFcdTc1MjhcdTUyMzBcdTUyMkJcdTU0MERcbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IFwiQGltcG9ydCAnLi9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMuc2Nzcyc7XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsb0JBQW9CO0FBQ3pULE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGtCQUFrQjtBQUV6QixPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLGVBQWUsZ0JBQWdCLGFBQWE7QUFBQSxNQUN0RCxTQUFTLENBQUMsZ0JBQWdCO0FBQUEsSUFDNUIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLEtBQUs7QUFBQSxNQUNmLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBO0FBQUEsTUFFakMsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBO0FBQUEsUUFDVCxVQUFVO0FBQUE7QUFBQSxRQUNWLGtCQUFrQjtBQUFBO0FBQUEsTUFDcEI7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsc0JBQXNCO0FBQUE7QUFBQSxNQUN0QixLQUFLO0FBQUE7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssS0FBSyxLQUFLLGtDQUFXLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFFbkM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
