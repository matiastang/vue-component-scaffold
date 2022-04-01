/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-04-01 10:20:44
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
import DwPortfolioNetWorth from './dwPortfolioNetWorth/src/DwPortfolioNetWorth.vue'
// 西筹个股分析小程序图谱组件
import DwStocksAnalysisLine, {
    AnalyzeType,
    ReportType,
} from './dwStocksAnalysisLine/src/DwStocksAnalysisLine.vue'
// 基金筛选
import DwFilterSlider from './dwFilterSlider/src/DwFilterSlider.vue'
import DwFilterArea from './dwFilterArea/src/DwFilterArea.vue'
// import { ChartItem, CanvasItem } from './dwFilterArea/src/interface'
import DwFilterRuler from './dwFilterRuler/src/DwFilterRuler.vue'
import DwFilterAreaSlider from './dwFilterAreaSlider/src/DwFilterAreaSlider.vue'
import DwFilterRulerSlider from './dwFilterRulerSlider/src/DwFilterRulerSlider.vue'

// 所有组件列表
const components = [
    DwWechatLogin,
    DwDragVerify,
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
    DwPortfolioNetWorth,
    DwStocksAnalysisLine,
    DwFilterSlider,
    DwFilterArea,
    DwFilterRuler,
    DwFilterAreaSlider,
    DwFilterRulerSlider,
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
    DwFilterArea,
    // ChartItem,
    // CanvasItem,
    DwFilterRuler,
    DwFilterAreaSlider,
    DwFilterRulerSlider,
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
    DwPortfolioNetWorth,
    // 西筹通用组件
    DwWechatLogin,
    DwDragVerify,
}

export default {
    version: '0.2.12',
    install,
}
