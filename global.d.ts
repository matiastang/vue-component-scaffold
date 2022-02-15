/*
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-15 10:52:52
 * @FilePath: /dw-vue-components/global.d.ts
 * @Description: 全局组件声明
 */
declare module 'vue' {
    export interface GlobalComponents {
        DwFilterSlider: typeof import('datumwealth-vue-components')['DwFilterSlider']
        DwFilterArea: typeof import('datumwealth-vue-components')['DwFilterArea']
        DwFilterRuler: typeof import('datumwealth-vue-components')['DwFilterRuler']
        DwFilterAreaSlider: typeof import('datumwealth-vue-components')['DwFilterAreaSlider']
        DwFilterRulerSlider: typeof import('datumwealth-vue-components')['DwFilterRulerSlider']
        DwWechatLogin: typeof import('datumwealth-vue-components')['DwWechatLogin']
        DwDragVerify: typeof import('datumwealth-vue-components')['DwDragVerify']
        DwPortfolioBg: typeof import('datumwealth-vue-components')['DwPortfolioBg']
        DwPortfolioIcon: typeof import('datumwealth-vue-components')['DwPortfolioIcon']
        DwPortfolioLine: typeof import('datumwealth-vue-components')['DwPortfolioLine']
        DwPortfolioPie: typeof import('datumwealth-vue-components')['DwPortfolioPie']
        DwPortfolioIndustry: typeof import('datumwealth-vue-components')['DwPortfolioIndustry']
        DwStocksAnalysisLine: typeof import('datumwealth-vue-components')['DwStocksAnalysisLine']
    }
}

export {}
