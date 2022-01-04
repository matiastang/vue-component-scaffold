/*
 * @Author: matiastang
 * @Date: 2022-01-04 16:03:19
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-04 17:01:19
 * @FilePath: /dw-vue-components/components/global.d.ts
 * @Description: 全局组件声明
 */
declare module 'vue' {
    export interface GlobalComponents {
        DwWechatLogin: typeof import('datumwealth-vue-components')['DwWechatLogin']
    }
}

export {}
