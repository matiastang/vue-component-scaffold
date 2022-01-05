/*
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 09:55:53
 * @FilePath: /dw-vue-components/global.d.ts
 * @Description: 全局组件声明
 */
declare module 'vue' {
    export interface GlobalComponents {
        DwWechatLogin: typeof import('datumwealth-vue-components')['DwWechatLogin']
    }
}

export {}
