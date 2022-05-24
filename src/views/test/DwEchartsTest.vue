<template>
    <div class="home">
        <DwPortfolioBg class="home-bg">
            <template v-slot:leftTopImg>
                <img src="static/bg/bg-left-top.png" style="width: 28rem; height: 28rem" />
            </template>
            <DwEcharts :echarts-option="echartsOption" :style="{ height: '300px' }"></DwEcharts>
            <!-- <DwLineChart
                ref="chart"
                :echarts-option="echartsOption"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwLineChart> -->
            <DwDefectFactorLine
                :x-data="xData"
                :y-data="yData"
                :chart-theme="{}"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectFactorLine>
            <DwDefectPositionLine
                :x-data="xData"
                :y-data="yData"
                :chart-theme="{ color: '#f00' }"
                :style="{ height: '300px', background: '#FFFFFF' }"
            ></DwDefectPositionLine>
            <template v-slot:rightBottomImg>
                <img src="static/bg/bg-right-bottom.png" style="width: 28rem; height: 28rem" />
            </template>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import {
    Ref,
    ref,
    reactive,
    onMounted,
    onBeforeUnmount,
    nextTick,
    computed,
    watchEffect,
} from 'vue'
// import { DwPortfolioBg } from 'datumwealth-vue-components'
// import DwEcharts from 'root/components/dwEcharts'
// import DwLineChart from 'root/components/dwLineChart'
// import DwDefectPositionLine from 'root/components/dwDefectPositionLine'
// import DwDefectFactorLine from 'root/components/dwDefectFactorLine'

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
    0, 0.012981047736870208, 0.016336910241158437, 0.005235829117313867, 0.016776002918583516,
    0.00789947976969732, 0.009550990293944628, 0.00926097933167977, 0.017393477580535218,
    0.019975173490971155, 0.009087084944248217, 0.019814816688109544, 0.05130078891769939,
    0.05316428230972212, 0.03490303433926121, 0.04057556274888274, 0.018402981245378158,
    0.0201691872720452, 0.009545025529472355, 0.014794261343107462,
].map((item) => {
    return item * 1000
})

const chart: Ref<any> = ref(null)
const seriesMarkLineData = reactive({
    value: [] as ({ yAxis: number } | { xAxis: string })[],
})
const lastIndex = computed(() => {
    return xData.length - 1
})
// echarts option
// const echartsOption = computed(() => {
//     return {
//         grid: {
//             show: true,
//             left: '0',
//             right: '30',
//             top: '10',
//             bottom: '5',
//             containLabel: true,
//             backgroundColor: '#F7F7F7',
//             borderColor: '#F7F7F7',
//         },
//         tooltip: {
//             show: true,
//             trigger: 'axis',
//             axisPointer: {
//                 // type: 'none',
//                 type: 'line',
//                 snap: true,
//                 label: {
//                     show: false,
//                 },
//             },
//             padding: 6,
//             borderColor: '#F87125',
//             extraCssText:
//                 'background: #F87125; border-radius: 6px;font-size: 12px; font-family: PingFang SC-Regular, PingFang SC; font-weight: 400; color: #FFFFFF; line-height: 14px;',
//             formatter: (value: { value: number }[], index: number) => {
//                 if (!Array.isArray(value) || value.length <= 0) {
//                     return `${index}数据格式错误`
//                 }
//                 let item = value[0]
//                 return `因子收益率：${item.value.toFixed(2)}%`
//             },
//         },
//         xAxis: {
//             show: true,
//             type: 'category',
//             boundaryGap: false,
//             data: xData,
//             axisLine: {
//                 // 不显示坐标轴轴线
//                 show: false,
//             },
//             axisTick: {
//                 // 不显示刻度
//                 show: false,
//             },
//             splitNumber: 20,
//             axisLabel: {
//                 show: true,
//                 fontSize: 14,
//                 color: '#8F8F8F',
//                 interval: 0, //使x轴文字显示全
//                 formatter: (value: string, index: number) => {
//                     if (index === 0 || index === lastIndex.value) {
//                         return value
//                     }
//                     return ''
//                 },
//             },
//         },
//         yAxis: {
//             show: true,
//             axisLine: {
//                 show: true, // 不显示坐标轴轴线
//                 lineStyle: {
//                     color: '#CBCBCB',
//                 },
//             },
//             axisTick: {
//                 show: false, // 不显示刻度
//             },
//             splitLine: {
//                 show: false, // 不显示网管线
//             },
//             axisLabel: {
//                 show: true,
//                 inside: false, // 刻度标签是否朝内，默认朝外。
//                 fontSize: 10,
//                 color: '#404040',
//                 formatter: (value: string, index: number) => {
//                     return `${Number(value)}`
//                 },
//             },
//             min: 0,
//             // max: 100,
//         },
//         series: [
//             {
//                 type: 'line',
//                 lineStyle: {
//                     // 不显示线
//                     color: 'none',
//                     width: 0,
//                 },
//                 areaStyle: {
//                     color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [
//                             {
//                                 offset: 0,
//                                 color: '#FFC8B7', // 0% 处的颜色
//                                 // color: '#F87125',
//                             },
//                             {
//                                 offset: 1,
//                                 color: '#FFF0EB', // 100% 处的颜色
//                             },
//                         ],
//                         global: false, // 缺省为 false
//                     },
//                 },
//                 emphasis: {
//                     lineStyle: {
//                         width: 1, // hover时的折线宽度
//                     },
//                 },
//                 showAllSymbol: true,
//                 triggerLineEvent: false,
//                 markLine: {
//                     symbol: 'none', //去掉箭头
//                     animation: false,
//                     label: {
//                         show: false,
//                     },
//                     lineStyle: {
//                         color: '#8F8F8F',
//                         type: 'dashed',
//                         width: 1, // 正常时的折线宽度
//                     },
//                     emphasis: {
//                         disabled: true, // 从 v5.3.0 开始支持
//                         lable: {
//                             show: false,
//                         },
//                         lineStyle: {
//                             color: '#8F8F8F',
//                             type: 'dashed',
//                             width: 1, // 正常时的折线宽度
//                         },
//                     },
//                     data: seriesMarkLineData.value,
//                 },
//                 data: yData.map((value, index) => {
//                     return {
//                         value,
//                         itemStyle: {
//                             color: '#F84848',
//                         },
//                         symbol: 'none',
//                         symbolSize: 7,
//                     }
//                 }),
//             },
//         ],
//     }
// })

const echartsOption = computed(() => {
    return {
        grid: {
            show: true,
            left: '0',
            right: '30',
            top: '10',
            bottom: '5',
            containLabel: true,
            backgroundColor: '#F7F7F7',
            borderColor: '#F7F7F7',
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                snap: true,
                label: {
                    show: false,
                },
            },
            padding: 6,
            borderColor: '#FFAB48',
            extraCssText:
                'background: #FFAB48; border-radius: 6px;font-size: 12px; font-family: PingFang SC-Regular, PingFang SC; font-weight: 400; color: #FFFFFF; line-height: 14px;',
            formatter: (value: { value: number; axisValue: string }[], index: number) => {
                if (!Array.isArray(value) || value.length <= 0) {
                    return `${index}数据格式错误`
                }
                let item = value[0]
                // 无法解析回调return的html字符串
                return `${item.axisValue}<br/>权益仓位${item.value.toFixed(2)}%`
            },
        },
        xAxis: {
            show: true,
            type: 'category',
            boundaryGap: false,
            data: xData,
            axisLine: {
                // 不显示坐标轴轴线
                show: false,
            },
            axisTick: {
                // 不显示刻度
                show: false,
            },
            splitNumber: 20,
            axisLabel: {
                show: true,
                fontSize: 14,
                color: '#8F8F8F',
                interval: 0, //使x轴文字显示全
                formatter: (value: string, index: number) => {
                    if (index === 0 || index === lastIndex.value) {
                        return value
                    }
                    return ''
                },
            },
        },
        yAxis: {
            show: true,
            axisLine: {
                show: true, // 不显示坐标轴轴线
                lineStyle: {
                    color: '#CBCBCB',
                },
            },
            axisTick: {
                show: true, // 不显示刻度
                inside: true,
                lineStyle: {
                    color: '#CBCBCB',
                },
            },
            splitLine: {
                show: false, // 不显示网管线
            },
            axisLabel: {
                show: true,
                inside: false, // 刻度标签是否朝内，默认朝外。
                fontSize: 10,
                color: '#404040',
                formatter: (value: string, index: number) => {
                    return `${value}%`
                },
            },
            // min: 0,
            // max: 100,
        },
        series: [
            {
                type: 'line',
                lineStyle: {
                    color: '#FFAB48',
                    width: 2,
                },
                emphasis: {
                    lineStyle: {
                        width: 2, // hover时的折线宽度
                    },
                },
                showAllSymbol: true,
                triggerLineEvent: false,
                // markLine: {
                //     symbol: 'none', //去掉箭头
                //     animation: false,
                //     label: {
                //         show: false,
                //     },
                //     lineStyle: {
                //         color: '#8F8F8F',
                //         type: 'dashed',
                //         width: 1, // 正常时的折线宽度
                //     },
                //     emphasis: {
                //         disabled: true, // 从 v5.3.0 开始支持
                //         lable: {
                //             show: false,
                //         },
                //         lineStyle: {
                //             color: '#8F8F8F',
                //             type: 'dashed',
                //             width: 1, // 正常时的折线宽度
                //         },
                //     },
                //     data: seriesMarkLineData.value,
                // },
                data: yData.map((value, index) => {
                    return {
                        value,
                        symbol: 'none',
                    }
                }),
            },
        ],
    }
})

// 监听mouseup
// watchEffect(() => {
//     const chartValue = chart.value
//     if (!chartValue) {
//         return
//     }
//     const eChart = chart.value.lineChart
//     if (!eChart) {
//         return
//     }
//     eChart.getZr().on('mousemove', function (params: any) {
//         // 获取点击位置的坐标
//         let pointInPixel = [params.offsetX, params.offsetY]
//         // containPixel为true则点击位置在坐标轴内
//         if (eChart.containPixel('grid', pointInPixel)) {
//             // 传入鼠标位置坐标进行转化
//             // convertFromPixel返回[x, y],x对应鼠标点击处数据的下标,y对应鼠标点击处的数值
//             const x = eChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0]
//             // series[0].data[x]是第一条折线上的数据
//             const markLineValue = yData[x]
//             // let series = lineChartOptions.series
//             // // 修改markLine的值
//             // series[0].markLine.data = [{ yAxis: markLineValue }]
//             // // 重新setOption
//             // this.lineEchart.setOption({ series }, { lazyUpdate: true })
//             seriesMarkLineData.value = [
//                 {
//                     yAxis: yData[x],
//                 },
//                 {
//                     xAxis: xData[x],
//                 },
//             ]
//         } else {
//             seriesMarkLineData.value = []
//             // // 不在坐标轴内不展示markLine
//             // let series = lineChartOptions.series
//             // series[0].markLine.data = []
//             // this.lineEchart.setOption(
//             //     {
//             //         series,
//             //     },
//             //     { lazyUpdate: true }
//             // )
//         }
//     })
//     eChart.getZr().on('mouseup', function (event: any) {
//         eChart.dispatchAction({
//             type: 'hideTip',
//         })
//         seriesMarkLineData.value = []
//     })
// })
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
        .text {
            height: 3rem;
            font-size: fontSize(14px);
            @include defaultFont;
            color: $placeholderColor;
            line-height: 3rem;
            text-align: center;
        }
        .dw-filter-area {
            width: 100%;
            padding: 0rem 1.4rem;
            box-sizing: border-box;
        }
        .dw-filter-slider {
            width: 100%;
            padding: 1.4rem;
            box-sizing: border-box;
        }
    }
}
</style>
