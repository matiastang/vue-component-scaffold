<!--
 * @Author: matiastang
 * @Date: 2022-01-13 19:00:54
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-18 10:17:05
 * @FilePath: /dw-vue-components/src/views/test/DwStocksAnalysisLineTest.vue
 * @Description: DwStocksAnalysisLine组件测试
-->
<template>
    <div class="home">
        <DwPortfolioBg
            class="home-bg"
            left-top-url="static/bg/bg-left-top.png"
            right-bottom-url="static/bg/bg-right-bottom.png"
        >
            <div class="text">{{ title }}</div>
            <DwStocksAnalysisLine
                ref="vueEchart"
                :y-data="stocksAnalysisData.value"
                :analyzeType="analyzeType"
                :reportType="ReportType.DAY"
                :chartStyle="chartStyle"
                :fullScreenStyle="fullScreenStyle"
                :autoResize="false"
                @arge-screen="argeScreenAction"
                :showFullScreen="true"
                themeColor="#296fff"
                :pointTrace="true"
            >
                <template v-slot:fullScreenImg>
                    <img
                        src="static/openAlpha/full-screen.png"
                        style="width: 2.8rem; height: 2.8rem"
                    />
                </template>
            </DwStocksAnalysisLine>
            <div @click="stocksAnalysisDataChangeAction">切换数据</div>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
    DwPortfolioBg,
    // DwStocksAnalysisLine,
    AnalyzeType,
    ReportType,
} from 'datumwealth-vue-components'
// import DwPortfolioBg from 'root/components/dwPortfolioBg'
// import DwStocksAnalysisLine, { AnalyzeType, ReportType } from 'root/components/dwStocksAnalysisLine'

const argeScreenAction = () => {
    console.log('点击了大屏查看')
}

const testData = [
    // 数量
    [
        63728781, 273408012, 311825293, 271786113, 143719228, 222530711, 176305296, 373832056,
        651284673, 695289545, 741806715, 592130430, 335984459, 426056686, 420261800, 464910782,
        245593994, 250017771, 203402386, 240828490, 258252854, 484602734, 478500678, 351851486,
        251681543, 168237572, 149348223, 163708039, 97209784, 125416681, 81425750, 118520172,
        198272592, 103719831, 106024806, 112399063, 42588132, 33720601, 39853625, 58161258,
        80456579, 290098071, 265900439, 300892926, 257879212, 222048195, 346866266, 263609489,
        314932440, 337497035, 317148074, 239032318, 164582499, 129692109, 228657045, 382740223,
        269650282, 82123528, 56577291,
    ],
    // 市值
    [
        2998439146.05, 19562342755.74, 42080823290.35, 28836506589.3, 7604184353.48, 10961862823.86,
        5865677197.92, 9940194369.04, 25471743561.03, 34389020895.7, 37609600450.5, 32620465388.7,
        16933616733.6, 19280806689.56, 22227646602.0, 26109389517.12, 12147078943.24,
        12068357806.17, 6828218098.02, 8294133195.6, 9446889399.32, 22165729053.16, 20068318435.32,
        15935353800.94, 10512738051.11, 5847938002.72, 5331731561.1, 6831536467.47, 3651199487.04,
        4933892230.54, 3366140505.0, 8854642050.12, 15512847598.08, 8498802952.14, 3165900707.16,
        4046366268.0, 1354728478.92, 1080408056.04, 1361399830.0, 2060653370.94, 2977697988.79,
        14391765302.31, 14401167776.24, 21056486961.48, 16842091335.72, 13007583263.1,
        23760339221.0, 14788492332.9, 24281291124.0, 29905612271.35, 27604568360.96, 20427701896.28,
        11384171455.83, 9260016582.6, 17437386251.7, 33290744596.54, 21221477193.4, 5278900379.84,
        2736090823.76,
    ],
    // 占比
    [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.7799999999999999, 1.09, 2.31, 2.59, 3.1300000000000003, 2.3,
        1.26, 1.66, 1.69, 1.9900000000000002, 0.97, 1.02, 0.64, 0.84, 0.97, 2.23, 2.12,
        1.6199999999999999, 1.06, 0.62, 0.54, 0.7100000000000001, 0.42, 0.5599999999999999, 0.36,
        0.95, 1.31, 0.65, 0.32, 0.33, 0.13, 0.1, 0.13, 0.2, 0.27999999999999997, 1.3, 1.25, 1.87,
        1.4500000000000002, 1.18, 2.29, 1.6, 2.15, 2.7199999999999998, 2.45, 1.6, 0.89, 0.58,
        0.8500000000000001, 1.28, 0.8099999999999999, 0.18, 0.09,
    ],
]

const index = ref(0)
const analyzeType = ref(AnalyzeType.VOL_HLD_STOCK)

const stocksAnalysisData = reactive({
    value: testData[index.value],
})
const stocksAnalysisDataChangeAction = () => {
    if (index.value >= 2) {
        index.value = 0
        analyzeType.value = AnalyzeType.VOL_HLD_STOCK
    } else {
        analyzeType.value =
            index.value === 0 ? AnalyzeType.HLD_MKT_VALUE : AnalyzeType.MKT_VAL_NET_ASSET
        index.value = index.value + 1
    }

    stocksAnalysisData.value = testData[index.value]
}

const title = ref('DwStocksAnalysisLine组件测试')

const chartStyle = reactive({ width: '100%', height: '30.5rem', padding: '0rem' })
const fullScreenStyle = reactive({ right: '1.6rem' })

// 图标自适应相关
const vueEchart: Ref<typeof DwStocksAnalysisLine | null> = ref(null)

const monitorScreen = () => {
    if (window.orientation === 0 || window.orientation === 180) {
        console.info('横屏')
        chartStyle.padding = '0rem 3rem'
        fullScreenStyle.right = '4.6rem'
    } else if (window.orientation === 90 || window.orientation === -90) {
        console.info('竖屏')
        chartStyle.padding = '0rem'
        fullScreenStyle.right = '1.6rem'
    }
    nextTick(() => {
        if (vueEchart.value) {
            vueEchart.value.resizeChart()
        }
    })
}
onMounted(() => {
    window.addEventListener('resize', monitorScreen)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', monitorScreen)
})
</script>

<style lang="scss" scoped>
// .dw-stocks-analysis-line {
//     --charts-bottom-normal-bg-color: #ffffff;
//     --charts-bottom-normal-text-color: #191919;
//     --charts-bottom-select-bg-color: #ff0000;
//     --charts-bottom-select-text-color: #ffffff;
// }
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
            height: 3rem;
            font-size: fontSize(14px);
            @include defaultFont;
            color: $placeholderColor;
            line-height: 3rem;
            text-align: center;
        }
    }
}
</style>
