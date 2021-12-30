/*
 * @Author: matiastang
 * @Date: 2021-12-30 19:41:13
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-30 19:53:05
 * @FilePath: /dw-vue-components/rollup/rollup.config.js
 * @Description: rollup配置
 */
// 在使用 rollup 开发插件时，咱们主要借助 rollup-plugin-typescript2 这个插件来实现根据源码生成 .d.ts 声明文件。

// 可是该插件存在几个问题，一是没法解析 .vue 文件，二是在 Vite + Vue3 的环境下，存在不兼容性（三是 Vite 内部支持 typescript，该插件存在很大部分的重复功能），说白了就是用不了。

// 固然，也有人在 issue 中提出但愿 Vite 内部支持在库模式导出声明文件，但 Vite 官方表示不但愿所以增长维护的负担和结构的复杂性。

// 所以在 Vite 开发中，咱们要想一些其余办法来生成声明文件。

// 本文介绍的生成方式仍是依赖一些现成的库，而后经过一些编程脚本以达到目的，毕竟从打包原理开始讲，那篇幅可能不太够。
