<!--
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-19 16:42:52
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
// 自定义组件
import DwVueComponents from 'datumwealth-vue-components'

const app = createApp(App)

// 导入西筹组件
app.use(DwVueComponents)
```
> `tsconfig.json`引入组件全局声明
```json
{
    ...
    "files": ["node_modules/datumwealth-vue-components/global.d.ts"],
    ...
}
```
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