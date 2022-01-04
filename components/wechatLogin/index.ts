/*
 * @Author: matiastang
 * @Date: 2021-12-30 18:49:53
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-04 14:59:35
 * @FilePath: /dw-vue-components/components/wechatLogin/index.ts
 * @Description:
 */
import { App } from 'vue'
import WechatLogin from 'root/components/wechatLogin/WechatLogin.vue'

// 定义 install 方法， App 作为参数
WechatLogin.install = (app: App): void => {
    app.component(WechatLogin.name, WechatLogin)
}

export default WechatLogin
