<!--
 * @Author: matiastang
 * @Date: 2021-12-13 10:12:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-04 16:29:03
 * @FilePath: /dw-vue-components/README.md
 * @Description: datumwealth-vue-components
-->
# datumwealth-vue-components

## 说明

该项目为`西筹金融科技`前端组件库项目。使用`Vue3`+`TS`+`Vite`开发。

## 运行

1. 安装datumwealth-vue-components

> $ pnpm add -D datumwealth-vue-components
> $ yarn add -D datumwealth-vue-components
> $ npm install -D datumwealth-vue-components

2. 声明使用

两种引入方式：
* 单个组件引入
```vue
<template>
    <WechatLogin
        appid="你的appid"
        scope="snsapi_login"
        :state="wechatState"
        :redirect_uri="redirect_uri"
    />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { WechatLogin } from 'datumwealth-vue-components'

const stateUUID = Math.round(Math.random() * 100 + 100)
// state
const wechatState = ref(stateUUID.toString())

// redirect_uri
const redirect_uri = computed(() => {
    const uri = `${window.location.origin}/login`
    console.log(uri)
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
> `*.vue`文件中使用
```vue
<template>
    <WechatLogin
        appid="你的appid"
        scope="snsapi_login"
        :state="wechatState"
        :redirect_uri="redirect_uri"
    />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { WechatLogin } from 'datumwealth-vue-components'

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

### 1.0.0

* 第一版

## package包

* 使用`pnpm`管理三方包