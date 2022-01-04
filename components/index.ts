/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-04 17:01:57
 * @FilePath: /dw-vue-components/components/index.ts
 * @Description: 导出组件
 */
import { App } from 'vue'
import DwWechatLogin from './dwWechatLogin/index'

// 所有组件列表
const components = [DwWechatLogin]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export { DwWechatLogin }

export default {
    install,
}
