/*
 * @Author: your name
 * @Date: 2021-10-15 17:23:18
 * @LastEditTime: 2022-01-04 15:10:36
 * @LastEditors: matiastang
 * @Description: In User Settings Edit
 * @FilePath: /dw-vue-components/global.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
