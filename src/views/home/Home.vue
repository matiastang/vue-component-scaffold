<!--
 * @Author: matiastang
 * @Date: 2021-12-29 10:52:57
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-11 18:05:55
 * @FilePath: /dw-vue-components/src/views/home/Home.vue
 * @Description: 
-->
<template>
    <div class="home">
        <DwPortfolioBg
            class="home-bg"
            left-top-url="static/bg/bg-left-top.png"
            right-bottom-url="static/bg/bg-right-bottom.png"
        >
            <div class="text">{{ text }}</div>
            <!-- <DwWechatLogin
                appid="wx6d902dc1624282c4"
                scope="snsapi_login"
                :state="wechatState"
                :redirect_uri="redirect_uri"
            ></DwWechatLogin> -->
            <!-- <DwDragVerify @dragSuccess="dragSuccess"></DwDragVerify> -->
            <DwPortfolioIcon />
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
// import { DwWechatLogin, DwDragVerify } from 'datumwealth-vue-components'
import { DwPortfolioBg, DwPortfolioIcon } from 'root/components/index'

const stateUUID = Math.round(Math.random() * 100 + 100)
console.log(`成功uuid:${stateUUID}`)
const wechatState = ref(stateUUID.toString())

/**
 * 重定向地址
 */
const redirect_uri = computed(() => {
    const uri = 'https://openalpha.cn/login'
    console.log(uri)
    const redirect_uri = encodeURI(uri)
    return redirect_uri
})

/**
 * 滑块验证通过
 */
const dragSuccess = () => {
    ElMessage.success('滑块验证通过')
}

const text = ref('home')
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .home-bg {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .text {
            font-size: fontSize(14px);
            @include defaultFont;
            color: $placeholderColor;
            line-height: 20px;
            text-align: center;
        }
    }
}
</style>
