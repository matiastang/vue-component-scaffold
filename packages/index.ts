/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-30 18:55:37
 * @FilePath: /dw-vue-components/packages/index.ts
 * @Description: 导出组件
 */
import { App } from 'vue'
import WechatLogin from './wechatLogin/WechatLogin.vue'

// 所有组件列表
const components = [WechatLogin]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export { WechatLogin }

export default {
    install,
}
