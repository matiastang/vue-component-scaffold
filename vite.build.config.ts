/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:37:18
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-04 13:56:46
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
// .vue或.ts生成.d.ts文件
import dts from 'vite-plugin-dts'

export default defineConfig({
    // 共享配置
    plugins: [
        vue(),
        dts({
            include: ['./components'],
        }),
    ],
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
            entry: path.resolve(__dirname, './components/index.ts'),
            name: 'dwVueComponents',
            formats: ['es', 'cjs', 'umd', 'iife'],
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
})
