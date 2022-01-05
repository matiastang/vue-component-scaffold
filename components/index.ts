/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:31:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 18:32:55
 * @FilePath: /dw-vue-components/components/index.ts
 * @Description: 导出所有组件
 */
import { App } from 'vue'
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue'
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue'

// 所有组件列表
const components = [
    {
        name: 'DwWechatLogin',
        component: DwWechatLogin,
    },
    {
        name: 'DwDragVerify',
        component: DwDragVerify,
    },
]

// 定义 install 方法， App 作为参数, options
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((item) => {
        app.component(item.name, item.component)
    })
}

export { DwWechatLogin, DwDragVerify }

export default {
    version: '0.1.12',
    install,
}
