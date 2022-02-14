<!--
 * @Author: matiastang
 * @Date: 2022-02-11 16:24:17
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-14 16:07:17
 * @FilePath: /dw-vue-components/src/views/test/DwFilterSliderTest.vue
 * @Description: DwFilterSlider组件测试
-->
<template>
    <div class="home">
        <DwPortfolioBg
            class="home-bg"
            left-top-url="static/bg/bg-left-top.png"
            right-bottom-url="static/bg/bg-right-bottom.png"
        >
            <div class="text">{{ oneTitle }}</div>
            <DwFilterRuler></DwFilterRuler>
            <DwFilterSlider
                class="dw-filter-slider"
                v-model:startValue="oneStart"
                v-model:endValue="oneEnd"
                :autoResize="false"
            >
                <template v-slot:greaterImg>
                    <img
                        src="static/filter/slider-greater.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
                <template v-slot:lessImg>
                    <img
                        src="static/filter/slider-less.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
            </DwFilterSlider>
            <div class="text">{{ twoTitle }}</div>
            <DwFilterRuler></DwFilterRuler>
            <DwFilterSlider
                class="dw-filter-slider"
                v-model:startValue="twoStart"
                v-model:endValue="twoEnd"
                :autoResize="false"
            >
                <template v-slot:greaterImg>
                    <img
                        src="static/filter/slider-greater.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
                <template v-slot:lessImg>
                    <img
                        src="static/filter/slider-less.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
            </DwFilterSlider>
            <div class="text">{{ threeTitle }}</div>
            <DwFilterRuler></DwFilterRuler>
            <DwFilterSlider
                class="dw-filter-slider"
                v-model:startValue="threeStart"
                v-model:endValue="threeEnd"
                :autoResize="false"
            >
                <template v-slot:greaterImg>
                    <img
                        src="static/filter/slider-greater.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
                <template v-slot:lessImg>
                    <img
                        src="static/filter/slider-less.svg"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
            </DwFilterSlider>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import {
    DwPortfolioBg,
    // DwStocksAnalysisLine,
} from 'datumwealth-vue-components'
import DwFilterSlider from 'root/components/dwFilterSlider'
import DwFilterRuler from 'root/components/dwFilterRuler'

const oneStart = ref(Number.MIN_SAFE_INTEGER)
const oneEnd = ref(50)
const oneTitle = computed(() => {
    return `start=${oneStart.value}~end=${oneEnd.value}`
})

const twoStart = ref(10)
const twoEnd = ref(Number.MAX_SAFE_INTEGER)
const twoTitle = computed(() => {
    return `start=${twoStart.value}~end=${twoEnd.value}`
})

const threeStart = ref(10)
const threeEnd = ref(90)
const threeTitle = computed(() => {
    return `start=${threeStart.value}~end=${threeEnd.value}`
})
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .home-bg {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .text {
            height: 3rem;
            font-size: fontSize(14px);
            @include defaultFont;
            color: $placeholderColor;
            line-height: 3rem;
            text-align: center;
        }
        .dw-filter-slider {
            width: 100%;
            padding: 1.4rem;
            box-sizing: border-box;
        }
    }
}
</style>
