/* eslint-disable camelcase */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'

const resolve = (path: string) => join(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包路径
  server: {
    // 开发配置
    host: '0.0.0.0',
    port: 8080,
    open: true,
    https: false,
    proxy: {},
  },
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
