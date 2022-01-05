/*
 * @Author: matiastang
 * @Date: 2021-12-30 18:49:53
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-05 10:41:41
 * @FilePath: /dw-vue-components/components/dwWechatLogin/index.ts
 * @Description: 微信登录组件导出
 */
import { App } from 'vue'
import DwWechatLogin from './src/DwWechatLogin.vue'

// 定义 install 方法， App 作为参数
DwWechatLogin.install = (app: App): void => {
    app.component(DwWechatLogin.name || 'DwWechatLogin', DwWechatLogin)
}

export default DwWechatLogin
