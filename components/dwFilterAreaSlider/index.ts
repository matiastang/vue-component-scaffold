/*
 * @Author: matiastang
 * @Date: 2022-02-14 17:21:58
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-14 17:39:30
 * @FilePath: /dw-vue-components/components/dwFilterAreaSlider/index.ts
 * @Description:
 */
import { App } from 'vue'
import dwFilterAreaSlider from './src/dwFilterAreaSlider.vue'

// 定义 install 方法， App 作为参数
dwFilterAreaSlider.install = (app: App): void => {
    app.component(dwFilterAreaSlider.name, dwFilterAreaSlider)
}

// export { ChartItem, CanvasItem }

export default dwFilterAreaSlider
