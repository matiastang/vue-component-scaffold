/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 11:09:39
 * @FilePath: /dw-vue-components/components/index.ts
 * @Description: 导出所有组件
 */
import { App } from 'vue'
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue'
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue'

DwWechatLogin.name = DwWechatLogin.name || 'DwWechatLogin'
DwDragVerify.name = DwDragVerify.name || 'DwDragVerify'

// 所有组件列表
const components = [DwWechatLogin, DwDragVerify]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}

export { DwWechatLogin, DwDragVerify }

export default {
    install,
}
