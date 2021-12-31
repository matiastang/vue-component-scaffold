/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:37:18
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-31 10:28:09
 * @FilePath: /dw-vue-components/vite.build.config.ts
 * @Description: npm 打包上传配置
 */
// vite配置文件vite.config.js

// node路径
import path from 'path'
// vite
import { defineConfig } from 'vite'
// 解析.vue文件
import vue from '@vitejs/plugin-vue'
// 解析.jsx语法
import vueJsx from '@vitejs/plugin-vue-jsx'
// 手动导入使用 unplugin-element-plus
// import ElementPlus from 'unplugin-element-plus/vite'
// 自动导入使用 unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 开启GZIP压缩
// import compressPlugin from 'vite-plugin-compression'
// 图片压缩
import viteImagemin from 'vite-plugin-imagemin'
import config from './loadenv'
// .vue或.ts生成.d.ts文件
import dts from 'vite-plugin-dts'

export default defineConfig({
    // 共享配置
    plugins: [vue(), dts()],
    resolve: {
        // 别名
        alias: [
            { find: 'root', replacement: path.resolve(__dirname, './') },
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: 'static', replacement: path.resolve(__dirname, './static') },
            { find: 'store', replacement: path.resolve(__dirname, './src/store') },
            { find: 'utils', replacement: path.resolve(__dirname, './src/common/utils') },
        ],
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
        // CSS 预处理器的选项
        preprocessorOptions: {
            less: {},
            scss: {
                additionalData: `
                    @use "@/common/css/element-variables.scss" as * ;
                    @use "@/common/css/index.scss" as * ;
                `,
            },
            sass: {},
        },
    },
    // 库模式
    build: {
        lib: {
            entry: path.resolve(__dirname, './packages/index.ts'),
            name: 'dwVueComponents',
            // formats: ['es', 'cjs', 'umd', 'iife'],
            formats: ['es', 'umd'],
            fileName: (format) => `dw-vue-components.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    // build: {
    //     outDir: './build',
    //     assetsInlineLimit: 10240,
    //     // rollupOptions: {
    //     //     input:'src/pages/default/index.html'
    //     // }
    // },
})
