/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-11 16:23:38
 * @FilePath: /dw-vue-components/components/index.ts
 * @Description: 导出所有组件
 */
import { App } from 'vue'
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue'
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue'
// 西筹基金组合小程序图谱组件
import DwPortfolioBg from './dwPortfolioBg/src/DwPortfolioBg.vue'
import DwPortfolioIcon from './dwPortfolioIcon/src/DwPortfolioIcon.vue'
import DwPortfolioLine from './dwPortfolioLine/src/DwPortfolioLine.vue'
import DwPortfolioPie from './dwPortfolioPie/src/DwPortfolioPie.vue'
import DwPortfolioIndustry from './dwPortfolioIndustry/src/DwPortfolioIndustry.vue'
// 西筹个股分析小程序图谱组件
import DwStocksAnalysisLine, {
    AnalyzeType,
    ReportType,
} from './dwStocksAnalysisLine/src/DwStocksAnalysisLine.vue'
// 基金筛选
import DwFilterSlider from './DwFilterSlider/src/DwFilterSlider.vue'

// 所有组件列表
const components = [
    DwWechatLogin,
    DwDragVerify,
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
    DwStocksAnalysisLine,
    DwFilterSlider,
]

// 定义 install 方法， App 作为参数, options
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((item) => {
        app.component(item.name, item.component)
    })
}

export {
    // 西筹“基金筛选”小程序
    DwFilterSlider,
    // 西筹“个股分析”小程序
    DwStocksAnalysisLine,
    AnalyzeType,
    ReportType,
    // 西筹“基金组合”小程序
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
    // 西筹通用组件
    DwWechatLogin,
    DwDragVerify,
}

export default {
    version: '0.1.20',
    install,
}
