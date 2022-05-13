<!--
 * @Author: matiastang
 * @Date: 2022-05-10 10:27:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-13 10:53:28
 * @FilePath: /dw-vue-components/src/views/test/DwDefectChartsTest.vue
 * @Description: 西筹-大V-寻暇记-图谱测试
-->
<template>
    <div class="home">
        <DwPortfolioBg class="home-bg">
            <template v-slot:leftTopImg>
                <img src="static/bg/bg-left-top.png" style="width: 28rem; height: 28rem" />
            </template>
            <DwDefectDashboard
                :percentage="70"
                :style="{
                    background: 'white',
                    zoom: 0.5,
                }"
            ></DwDefectDashboard>
            <DwDefectFactorLine
                ref="factorChart"
                :x-data="factorCurveXData.value"
                :y-data="factorCurveYData.value"
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
                :x-data="tradeoffPositionChartXData"
                factor-title="沪深300权益性价比"
                :factorYData="tradeoffChartYData"
                :tooltipFactorValueDecimalDigits="4"
                position-title="灵活配置型公募持仓"
                :positionYData="positionChartYData"
                :yRangeRound="{
                    min: false,
                    max: false,
                    diffPercent: 10,
                    decimal: 10,
                }"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectFactorPositionTraceLine>
            <template v-slot:rightBottomImg>
                <img src="static/bg/bg-right-bottom.png" style="width: 28rem; height: 28rem" />
            </template>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, watchEffect, reactive, computed } from 'vue'
import { tradeoffCurve, positionCurve, factorCurve } from '@/api/request'
import { TradeoffCurveInfo, PositionCurveItem } from '@/@types/index'
// import { DwPortfolioBg } from 'datumwealth-vue-components'
// import {
//     DwPortfolioBg,
//     DwDefectDashboard,
//     DwDefectPositionLine,
//     DwDefectFactorLine,
//     DwDefectFactorPositionTraceLine,
// } from 'datumwealth-vue-components'
// import { DwPortfolioBg } from 'datumwealth-vue-components'
// import DwDefectDashboard from 'root/components/dwDefectDashboard'
// import DwDefectPositionLine from 'root/components/dwDefectPositionLine'
// import DwDefectFactorLine from 'root/components/dwDefectFactorLine'
// import DwDefectFactorPositionTraceLine from 'root/components/dwDefectFactorPositionTraceLine'

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
// 权益和公募性价比数据
const tradeoffPositionData = reactive({
    tradeoffData: null as TradeoffCurveInfo | null,
    positionData: null as PositionCurveItem[] | null,
})
/**
 * 获取权益性价比数据
 * @param indexCode
 * @param range
 */
const getTradeoffCurveChartsData = (indexCode: string, range: string) => {
    tradeoffCurve(indexCode, range)
        .then((res) => {
            tradeoffPositionData.tradeoffData = res
        })
        .catch((err) => {
            console.warn(err)
        })
}
watchEffect(() => {
    const indexCode = '000905.SH'
    const range = 'M6'
    getTradeoffCurveChartsData(indexCode, range)
})
/**
 * 获取权益性价比数据
 * @param classifyCode
 * @param range
 */
const getPositionCurveChartsData = (classifyCode: string, range: string) => {
    positionCurve(classifyCode, range)
        .then((res) => {
            tradeoffPositionData.positionData = res
        })
        .catch((err) => {
            console.warn(err)
        })
}
watchEffect(() => {
    const classifyCode = 'XX2022H0'
    const range = 'M6'
    getPositionCurveChartsData(classifyCode, range)
})

const dateStringTransform = (str: string) => {
    if (str.length !== 8) {
        return str
    }
    const y = str.slice(0, 4)
    let m = str.slice(4, 6)
    if (m.startsWith('0')) {
        m = m.slice(1)
    }
    let d = str.slice(6, 8)
    if (d.startsWith('0')) {
        d = d.slice(1)
    }
    return `${y}.${m}.${d}`
}

/**
 * x data
 */
const tradeoffPositionChartXData = computed(() => {
    const postion = tradeoffPositionData.positionData
    if (postion) {
        return postion.map((item) => dateStringTransform(item.tradeDate))
    }
    const tradeoff = tradeoffPositionData.tradeoffData
    if (tradeoff) {
        return tradeoff.list.map((item) => dateStringTransform(item.tradeDate))
    }
    return []
})
const tradeoffChartYData = computed(() => {
    const tradeoff = tradeoffPositionData.tradeoffData
    if (tradeoff) {
        return tradeoff.list.map((item) => item.rltvValue)
    }
    return []
})
const tradeoffChartPieces = computed(() => {
    const tradeoff = tradeoffPositionData.tradeoffData
    if (tradeoff) {
        const avg = tradeoff.avg
        const deviation = tradeoff.deviation
        return [
            {
                gt: Number.MIN_SAFE_INTEGER,
                lte: avg - 2 * deviation,
                color: '#1BCE17',
            },
            {
                gt: avg - 2 * deviation,
                lte: avg + 2 * deviation,
                color: '#FFAB48',
            },
            {
                gt: avg + 2 * deviation,
                lte: Number.MAX_SAFE_INTEGER,
                color: '#FF2E2E',
            },
        ]
    }
    return [
        {
            gt: Number.MIN_SAFE_INTEGER,
            lte: -2,
            color: '#1BCE17',
        },
        {
            gt: -2,
            lte: 2,
            color: '#FFAB48',
        },
        {
            gt: 2,
            lte: Number.MAX_SAFE_INTEGER,
            color: '#FF2E2E',
        },
    ]
})
const positionChartYData = computed(() => {
    const postion = tradeoffPositionData.positionData
    if (postion) {
        return postion.map((item) => item.value * 100)
    }
    return []
})
/**
 * 因子收益率x
 */
const factorCurveXData = reactive({
    value: [] as string[],
})
/**
 * 因子收益率y
 */
const factorCurveYData = reactive({
    value: [] as number[],
})
/**
 * 获取因子收益率数据
 * @param classifyCode
 * @param range
 */
const getFactorCurveChartsData = (range: string) => {
    factorCurve(range)
        .then((res) => {
            factorCurveXData.value = res.map((item) => dateStringTransform(item.tradeDate))
            factorCurveYData.value = res.map((item) => item.ftrRtn)
        })
        .catch((err) => {
            console.warn(err)
        })
}
watchEffect(() => {
    const range = 'M6'
    getFactorCurveChartsData(range)
})

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
    width: 100%;
    background: #f87125;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .home-bg {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>
