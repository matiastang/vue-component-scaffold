/*
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 10:54:43
 * @FilePath: /dw-vue-components/global.d.ts
 * @Description: 全局组件声明
 */
declare module 'vue' {
    export interface GlobalComponents {
        DwWechatLogin: typeof import('datumwealth-vue-components')['DwWechatLogin']
        DwDragVerify: typeof import('datumwealth-vue-components')['DwDragVerify']
    }
}

export {}
