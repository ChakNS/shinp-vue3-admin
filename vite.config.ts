/* eslint-disable camelcase */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'

const resolve = (path: string) => join(__dirname, path)
const loadVar = (mode: string, v: string) => loadEnv(mode, process.cwd())[v]

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: './', // 打包路径
    server: {
      // 开发配置
      host: '0.0.0.0',
      port: 8080,
      open: false,
      https: false,
      proxy: {
        '/api': {
          target: loadVar(mode, 'VITE_APP_BACKEND_URL'),
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // build: {
    //   target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    // },
    plugins: [
      vue(),
      vueJsx({}),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      DefineOptions(),
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  })
}
