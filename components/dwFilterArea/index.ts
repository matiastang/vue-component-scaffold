/*
 * @Author: matiastang
 * @Date: 2022-02-11 17:52:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-14 16:41:33
 * @FilePath: /dw-vue-components/components/dwFilterArea/index.ts
 * @Description: DwFilterArea
 */
import { App } from 'vue'
import DwFilterArea, { ChartItem, CanvasItem } from './src/DwFilterArea.vue'

// 定义 install 方法， App 作为参数
DwFilterArea.install = (app: App): void => {
    app.component(DwFilterArea.name, DwFilterArea)
}

export { ChartItem, CanvasItem }

export default DwFilterArea
