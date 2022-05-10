<!--
 * @Author: matiastang
 * @Date: 2022-05-10 10:27:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-10 16:38:14
 * @FilePath: /dw-vue-components/src/views/test/DwDefectChartsTest.vue
 * @Description: 西筹-大V-寻暇记-图谱测试
-->
<template>
    <div class="home">
        <DwPortfolioBg class="home-bg">
            <template v-slot:leftTopImg>
                <img src="static/bg/bg-left-top.png" style="width: 28rem; height: 28rem" />
            </template>
            <DwDefectDashboard></DwDefectDashboard>
            <DwDefectFactorLine
                ref="factorChart"
                :x-data="xData"
                :y-data="yData"
                :chart-theme="{}"
                :point-trace="true"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectFactorLine>
            <DwDefectPositionLine
                :x-data="xData"
                :y-data="yData"
                :chart-theme="{ color: '#f00' }"
                :point-trace="false"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectPositionLine>
            <DwDefectFactorPositionTraceLine
                :x-data="xData"
                factor-title="沪深300权益性价比"
                :factorYData="data.one"
                position-title="灵活配置型公募持仓"
                :positionYData="data.two"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectFactorPositionTraceLine>
            <template v-slot:rightBottomImg>
                <img src="static/bg/bg-right-bottom.png" style="width: 28rem; height: 28rem" />
            </template>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, watchEffect } from 'vue'
import { DwPortfolioBg } from 'datumwealth-vue-components'
import DwDefectDashboard from 'root/components/dwDefectDashboard'
import DwDefectPositionLine from 'root/components/dwDefectPositionLine'
import DwDefectFactorLine from 'root/components/dwDefectFactorLine'
import DwDefectFactorPositionTraceLine from 'root/components/dwDefectFactorPositionTraceLine'

const xData = [
    '2021.7.9',
    '20210712',
    '20210713',
    '20210714',
    '20210715',
    '20210716',
    '20210719',
    '20210720',
    '20210721',
    '20210722',
    '20210723',
    '20210726',
    '20210727',
    '20210728',
    '20210729',
    '20210730',
    '20210802',
    '20210803',
    '20210804',
    '2021.8.5',
]
const yData = [
    12.981047736870208, 16.3369102411584, 52.35829117313867, 16.7760029185835, 78.9947976969732,
    95.50990293944628, 92.6097933167977, 17.3934775805352, 19.975173490971155, 90.87084944248217,
    19.8148166881095, 51.30078891769939, 53.16428230972212, 34.90303433926121, 40.57556274888274,
    18.4029812453781, 20.1691872720452, 9.545025529472355, 14.7942613431074, 38.7942613431074,
]

const data = {
    one: [
        2.6, -0.8, 3.9, 4.75, -4.6, -0.85, -1, -4.5, 0.96, 2.55, 2.65, 1.75, 2.05, 0.9, -0.8, -1,
        -0.6, 0.045, 0.7, 1.95,
    ],
    two: [
        12.981047736870208, 16.3369102411584, 52.35829117313867, 16.7760029185835, 78.9947976969732,
        95.50990293944628, 92.6097933167977, 17.3934775805352, 19.975173490971155,
        90.87084944248217, 19.8148166881095, 51.30078891769939, 53.16428230972212,
        34.90303433926121, 40.57556274888274, 18.4029812453781, 20.1691872720452, 9.545025529472355,
        14.7942613431074, 38.7942613431074,
    ],
}

const factorChart: Ref<any> = ref(null)

// 监听
watchEffect(() => {
    const chartValue = factorChart.value
    if (!chartValue) {
        return
    }
    const eChart = chartValue.chart
    if (!eChart) {
        return
    }
    eChart.getZr().on('mousemove', function (params: any) {
        console.log('mousemove')
    })
    eChart.getZr().on('mouseup', function (event: any) {
        console.log('mouseup')
    })
})
</script>

<style lang="scss" scoped>
.home {
    background: #f87125;
    border-radius: 6px;
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
    }
}
</style>
