/*
 * @Author: matiastang
 * @Date: 2022-01-05 18:43:00
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 18:43:01
 * @FilePath: /dw-vue-components/components/shims-vue.d.ts
 * @Description: vue类型声明
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
