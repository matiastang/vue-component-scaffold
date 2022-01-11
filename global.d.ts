/*
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-11 19:32:12
 * @FilePath: /dw-vue-components/global.d.ts
 * @Description: 全局组件声明
 */
declare module 'vue' {
    export interface GlobalComponents {
        DwWechatLogin: typeof import('datumwealth-vue-components')['DwWechatLogin']
        DwDragVerify: typeof import('datumwealth-vue-components')['DwDragVerify']
        DwPortfolioBg: typeof import('datumwealth-vue-components')['DwPortfolioBg']
        DwPortfolioIcon: typeof import('datumwealth-vue-components')['DwPortfolioIcon']
    }
}

export {}
