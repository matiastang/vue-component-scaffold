/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-13 10:24:00
 * @FilePath: /dw-vue-components/components/index.ts
 * @Description: 导出所有组件
 */
import { App } from 'vue'
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue'
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue'
import DwPortfolioBg from './dwPortfolioBg/src/DwPortfolioBg.vue'
import DwPortfolioIcon from './dwPortfolioIcon/src/DwPortfolioIcon.vue'
import DwPortfolioLine from './dwPortfolioLine/src/DwPortfolioLine.vue'
import DwPortfolioPie from './dwPortfolioPie/src/DwPortfolioPie.vue'
import DwPortfolioIndustry from './dwPortfolioIndustry/src/DwPortfolioIndustry.vue'

// 所有组件列表
const components = [
    DwWechatLogin,
    DwDragVerify,
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
]

// 定义 install 方法， App 作为参数, options
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((item) => {
        app.component(item.name, item.component)
    })
}

export {
    DwWechatLogin,
    DwDragVerify,
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
}

export default {
    version: '0.1.15',
    install,
}
