<!--
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-19 15:00:40
 * @FilePath: /dw-vue-components/README.md
 * @Description: datumwealth-vue-components
-->
# datumwealth-vue-components

## 说明

该项目为`西筹金融科技`前端组件库项目。使用`Vue3`+`TS`+`Vite`开发。

## 安装与使用

1. 安装datumwealth-vue-components

* `pnpm`导入
> $ pnpm add -D datumwealth-vue-components
* `yarn`导入
> $ yarn add -D datumwealth-vue-components
* `npm`导入
> $ npm install -D datumwealth-vue-components

2. 声明使用

两种引入方式如下（以`DwWechatLogin`组件举例）：

* 单个组件引入
  
> 首先`main.ts`引入全局样式：
```ts
// 导入组件依赖
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
// 导入样式
import 'datumwealth-vue-components/dist/style.css'
use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    MarkLineComponent,
    MarkPointComponent,
    VisualMapComponent,
])

```
页面中引入组件并使用
```vue
<template>
    <DwWechatLogin
        appid="你的appid"
        scope="snsapi_login"
        :state="wechatState"
        :redirect_uri="redirect_uri"
    />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { DwWechatLogin } from 'datumwealth-vue-components'

const stateUUID = Math.round(Math.random() * 100 + 100)
// state
const wechatState = ref(stateUUID.toString())

// redirect_uri
const redirect_uri = computed(() => {
    const uri = `${window.location.origin}/login`
    const redirect_uri = encodeURI(uri)
    return redirect_uri
})
</script>
```

* 全局引入

> `main.ts`中引入
```ts
// 导入组件依赖
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
// 导入组件
import DwVueComponents from 'datumwealth-vue-components'
// 导入样式
import 'datumwealth-vue-components/dist/style.css'
use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    MarkLineComponent,
    MarkPointComponent,
    VisualMapComponent,
])

const app = createApp(App)

// 导入西筹组件
app.use(DwVueComponents)
> `*.vue`文件中使用
```vue
<template>
    <DwWechatLogin
        appid="你的appid"
        scope="snsapi_login"
        :state="wechatState"
        :redirect_uri="redirect_uri"
    />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const stateUUID = Math.round(Math.random() * 100 + 100)
// state
const wechatState = ref(stateUUID.toString())

// redirect_uri
const redirect_uri = computed(() => {
    const uri = `${window.location.origin}/login`
    const redirect_uri = encodeURI(uri)
    return redirect_uri
})
</script>
```

## 版本

### 0.3.11

* `DwDefectDashboard`组件开发角速度设置。

### 0.3.10

* `DwDefectDashboard`数据为`0`的处理。

### 0.3.9

* 组件包的大小优化

### 0.3.8

1. feat:

* `DwDefectFactorPositionTraceLine`组件开放坐标轴单位设置功能。

### 0.3.7

1. fix:

* `DwStocksAnalysisLine`组件自适应大小报错修复

### 0.3.6

1. feat:

* `DwStocksAnalysisLine`组件支持主题

### 0.3.5

1. feat
* `DwLineChart`、`DwDefectPositionLine`、`DwDefectFactorLine`、`DwDefectFactorPositionTraceLine`开放自动设置`y`轴数据范围参数
* `DwLineChart`处理多条显示的`y`轴数据范围设置
* 添加`Defect`系列组件类型导出

### 0.3.4

1. feat

* `DwDefectPositionLine`、`DwDefectFactorLine`、`DwDefectFactorPositionTraceLine`开放参数部分配置参数
* `DwDefectFactorLine``y`轴添加百分比符号
* `DwDefectFactorPositionTraceLine`提示框仓位添加百分号

### 0.3.3

1. feat

* `DwDefectPositionLine`、`DwDefectFactorLine`、`DwDefectFactorPositionTraceLine`组件开放`grid`参数

2. fix

* `DwDefectDashboard`组件显示数值逻辑调整
* 更新说明文档

### 0.3.2

1. feat

* 更新三方库
```
"echarts": "^5.3.2",
"vue-echarts": "^6.0.3"
```

2. fix

* 修复组件不能使用app.use()单独导入的问题
* `zRander`的`registerPainter`未初始化，报错`Error: Renderer 'undefined' is not imported. Please import it first`

### 0.3.1

1. `DwDefectFactorPositionTraceLine`组件:

**factorVisualMapPieces**：开放设置`权益性价比`线条的`VisualMap`的`Pieces`。
**positionVisualMapPieces**：开放设置`公募持仓`线条的`VisualMap`的`Pieces`。
**positionMarkLineYData**：开放设置`持仓`的`MarkLine`位置。

2. 去掉`0.3.0`新增组件的调试输出。
3. 测试项目更新：
   
* 接口请求添加`matias-axios-throttle`三方库，进行组件请求去重。
* 状态管理更新为使用`pinia`并使用`matias-pinia-persisted-state`实现状态本地持久化。
* 删除废弃文件

4. 更新说明文件
5. 修复bug
* 样式不能全局导入问题
* 不能全局引入组件问题

### 0.3.0

1. 添加基础组件

* `DwEcharts`组件
* `DwLineChart`组件

2. 添加“寻暇记”相关组件

*  `DwDefectDashboard`组件
*  `DwDefectPositionLine`组件
*  `DwDefectFactorLine`组件
*  `DwDefectFactorPositionTraceLine`组件

3. 更新打包输出调整
```json
{
    "main": "./components/index.ts",
    "files": [
        "types",
        "components",
        "dist",
        "global.d.ts",
        "shims-vue.d.ts"
    ],
    "module": "./components/index.ts",
    "types": "./types/components/index.d.ts",
    "exports": {
        ".": {
            "import": "./components/index.ts",
            "require": "./dist/dw-vue-components.umd.js"
        }
    },
}
```
```json
{
   "main": "./dist/index.umd.js",
   "files": [
     "types",
     "dist"
   ],
   "module": "./dist/index.es.js",
   "types": "./types/components/index.d.ts",
   "exports": {
      ".": {
         "import": "./dist/index.es.js",
         "require": "./dist/index.umd.js"
      }
   },
}
```

### 0.2.13

* `DwPortfolioNetWorth`组件导出`chart`参数
  
### 0.2.12

* `DwPortfolioNetWorth`组件`tooltip`显示位置调整及添加移动端隐藏逻辑。

### 0.2.11

* `DwPortfolioNetWorth`组件显示范围问题处理。

### 0.2.10

* `DwPortfolioNetWorth`组件支持传递两个值。

### 0.2.9

* `DwPortfolioNetWorth`组件样式调整。

### 0.2.8

* `DwPortfolioNetWorth`组件初始化显示问题优化。

### 0.2.7

* `DwPortfolioNetWorth`组件：
1. 显示范围调整
2. 支持空显示

### 0.2.6

* 添加`DwPortfolioNetWorth`**单位净值**折线组件。

### 0.2.2

* `DwStocksAnalysisLine`组件，日频`近一天`去掉特殊处理
### 0.2.1

* `DwStocksAnalysisLine`组件，日频时间切换选项去掉`近一天`添加`近半年`
### 0.2.0

1. 添加**基金筛选**小程序相关组件
 
* 滑块组件：`DwFilterSlider`
* 刻度尺组件：`DwFilterRuler`
* 选择范围阴影图组件：`DwFilterArea`
* 阴影图、滑块组合组件：`DwFilterAreaSlider`
* 刻度尺、滑块组合组件：`DwFilterRulerSlider`

### 0.1.20

* `DwStocksAnalysisLine`组件，开放取消数据更新动画参数

### 0.1.19

* `DwStocksAnalysisLine`组件自适应问题修改

### 0.1.18

* `DwStocksAnalysisLine`组件优化：

1. 添加自适应功能
2. 开放大屏查看按钮插槽
3. UI微调

### 0.1.17

* 添加`DwStocksAnalysisLine`组件，西筹“个股分析”小程序，折线图

### 0.1.16

* 添加`DwPortfolioIndustry`组件，西筹“基金组合”结果页，行业沉积图
* 添加`DwPortfolioPie`组件，西筹“基金组合”结果页，行业饼图

### 0.1.15

* 添加`DwPortfolioLine`组件，西筹“基金组合”结果页优化折线图

### 0.1.14

* 添加`DwPortfolioIcon`组件，西筹“基金组合”组合策略折线icon

### 0.1.13

* 添加`DwPortfolioBg`组件，“基金组合”`H5`背景组件。
  
### 0.1.8

* 添加滑块拖拽验证`DwDragVerify`.

### 0.1.0

* 添加微信登录二维码组件`DwWechatLogin`.