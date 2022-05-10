/*
 * @Author: matiastang
 * @Date: 2022-01-04 17:38:54
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-09 09:50:17
 * @FilePath: /dw-vue-components/shims-vue.d.ts
 * @Description: vue全局类型声明
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
    // export {
    //     [proppName:String]: any;
    // }
}
