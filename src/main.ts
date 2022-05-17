/*
 * @Author: your name
 * @Date: 2021-10-15 17:10:16
 * @LastEditTime: 2022-05-17 15:16:20
 * @LastEditors: matiastang
 * @Description: In User Settings Edit
 * @FilePath: /dw-vue-components/src/main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import { store, key } from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import _package from '../package.json'
import { createPinia } from 'pinia'
import { createPersistedState } from 'matias-pinia-persisted-state'
// 自定义组件

// import {
//     DwPortfolioBg,
//     DwDefectDashboard,
//     DwDefectPositionLine,
//     DwDefectFactorLine,
//     DwDefectFactorPositionTraceLine,
// } from '../components/index'
// import DwVueComponents from 'datumwealth-vue-components'
// import {
//     DwPortfolioBg,
//     DwDefectDashboard,
//     DwDefectPositionLine,
//     DwDefectFactorLine,
//     DwDefectFactorPositionTraceLine,
// } from 'datumwealth-vue-components'
// import '../node_modules/datumwealth-vue-components/dist/style.css'
// import 'datumwealth-vue-components/dist/style.css'
// import DwVueComponents, { initEcharts } from '../components/index'
import DwVueComponents, { initEcharts } from '../dist/index.es.js'
// import DwVueComponents from 'root/dist/dw-vue-components.es.js'
import 'root/dist/style.css'
// 默认主题（如果是其他预编译样式可以配置vite默认导入）
import '@/common/themes/default.css'

const app = createApp(App)

// pinia

const pinia = createPinia()
pinia.use(
    createPersistedState({
        key: 'pinia-key',
    })
)
app.use(pinia)

// 导入西筹组件
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent,
    MarkLineComponent,
    MarkPointComponent,
    VisualMapComponent,
} from 'echarts/components'

use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    MarkLineComponent,
    MarkPointComponent,
    VisualMapComponent,
])
// initEcharts()
app.use(DwVueComponents)
// app.use(DwPortfolioBg)
//     .use(DwDefectDashboard)
//     .use(DwDefectPositionLine)
//     .use(DwDefectFactorLine)
//     .use(DwDefectFactorPositionTraceLine)

// Element-plus组件
app.use(ElementPlus, {
    locale: zhCn,
})
// 状态
// app.use(store, key)
// 路由
app.use(router)
// axios
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'
// 挂载
app.mount('#app')

const print = (key: string, value: string) =>
    console.log(
        `%c ${key} %c ${value} %c `,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:rgb(65, 184, 131) ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;',
        'background:transparent'
    )
print(_package.name, _package.version)
print('当前Vue版本：', app.version)
print('当前datumwealth-vue-components版本：', DwVueComponents.version)
