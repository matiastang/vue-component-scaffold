<!--
 * @Author: matiastang
 * @Date: 2022-05-10 10:41:21
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-12 17:35:39
 * @FilePath: /dw-vue-components/components/dwDefectFactorPositionTraceLine/src/DwDefectFactorPositionTraceLine.vue
 * @Description: 西筹-大v-寻暇记-权益仓位-权益&仓位-折线图
-->
<template>
    <DwLineChart
        ref="lineChart"
        :theme-key="themeKey"
        :echarts-option="echartsOption"
        :style="{ height: '300px', background: '#FFFFFF' }"
    ></DwLineChart>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, computed, PropType, reactive } from 'vue'
import DwLineChart from '../../dwLineChart'

interface ThemeColor {
    color?: string
    gridBackgroundColor: string
    gridBorderColor: string
    tooltipBorderColor: string
    tooltipExtraCssTextBackground: string
    tooltipExtraCssTextColor: string
    xAxisAxisLabelColor: string
    yAxisAxisLineLineStyleColor: string
    yAxisAxisTickLineStyleColor: string
    yAxisAxisLabelColor: string
    seriesLineMarkLineLineStyle: string
    seriesLineMarkLineEmphasisLineStyle: string
}
/**
 * 类型转换为可选
 */
type TypeOptional<T> = {
    [key in keyof T]?: T[key]
}
/**
 * 主题颜色
 */
type LineThemeColors = TypeOptional<ThemeColor>

interface BasePieces {
    color: string
}

interface Pieces extends BasePieces {
    [key: string]: string
}

/**
 * 图grid
 */
interface ChartsGrid {
    left: number
    right: number
    top: number
    bottom: number
}

export default defineComponent({
    name: 'DwDefectFactorPositionTraceLine',
    props: {
        /**
         * 主题（默认bright）
         * bright | bark
         */
        themeKey: {
            type: String,
            default: 'bright',
        },
        /**
         * 主题色
         */
        chartTheme: {
            type: Object as PropType<LineThemeColors>,
            default: () => {
                return {}
            },
        },
        /**
         * x轴数据
         */
        xData: {
            type: Array as PropType<Array<string>>,
            default: () => {
                return []
            },
        },
        /**
         * factor title
         */
        factorTitle: {
            type: String,
            default: '权益性价比',
        },
        /**
         * factor - visualMap
         */
        factorVisualMapPieces: {
            type: Array as PropType<Array<Pieces>>,
            default: () => {
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
            },
        },
        /**
         * Factor-y轴数据
         */
        factorYData: {
            type: Array as PropType<Array<number>>,
            default: () => {
                return []
            },
        },
        /**
         * position title
         */
        positionTitle: {
            type: String,
            default: '公募持仓',
        },
        /**
         * position - visualMap
         */
        positionVisualMapPieces: {
            type: Array as PropType<Array<Pieces>>,
            default: () => {
                return [
                    {
                        gt: 0,
                        lte: 88,
                        color: '#0E6EB8',
                    },
                    {
                        gt: 88,
                        color: '#FF54CF',
                    },
                ]
            },
        },
        /**
         * position markLine yData
         */
        positionMarkLineYData: {
            type: Number,
            default: 88,
        },
        /**
         * Position-y轴数据
         */
        positionYData: {
            type: Array as PropType<Array<number>>,
            default: () => {
                return []
            },
        },
        /**
         * grid
         */
        grid: {
            type: Object as PropType<ChartsGrid>,
            default: () => {
                return {
                    left: 7,
                    right: 3,
                    top: 10,
                    bottom: 5,
                } as ChartsGrid
            },
        },
    },
    setup(props, context) {
        // 导出
        const lineChart: Ref<any> = ref(null)
        // 颜色
        const colors = computed(() => {
            const normalColors = {
                // color: '#FFAB48',
                gridBackgroundColor: '#F7F7F7',
                gridBorderColor: '#F7F7F7',
                tooltipBorderColor: '#FFAB48',
                tooltipExtraCssTextBackground: '#FFAB48',
                tooltipExtraCssTextColor: '#FFFFFF',
                xAxisAxisLabelColor: '#8F8F8F',
                yAxisAxisLineLineStyleColor: '#CBCBCB',
                yAxisAxisTickLineStyleColor: '#CBCBCB',
                yAxisAxisLabelColor: '#404040',
                seriesLineMarkLineLineStyle: '#FF54CF', //'#8F8F8F',
                seriesLineMarkLineEmphasisLineStyle: '#FF54CF', //'#8F8F8F',
            } as ThemeColor
            return {
                ...normalColors,
                ...props.chartTheme,
            }
        })
        /**
         * MarkLine位置
         */
        const seriesMarkLineData = computed(() => {
            return [{ yAxis: props.positionMarkLineYData }]
        })
        // 末尾位置
        const lastIndex = computed(() => {
            return props.xData.length - 1
        })
        /**
         * 组装参数
         */
        const echartsOption = computed(() => {
            return {
                grid: {
                    show: true,
                    left: props.grid.left,
                    right: props.grid.right,
                    top: props.grid.top,
                    bottom: props.grid.bottom,
                    containLabel: true,
                    backgroundColor: colors.value.gridBackgroundColor,
                    borderColor: colors.value.gridBorderColor,
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
                    borderColor: colors.value.color || colors.value.tooltipBorderColor,
                    extraCssText: `background: ${
                        colors.value.color || colors.value.tooltipExtraCssTextBackground
                    }; border-radius: 6px;font-size: 12px; font-family: PingFang SC-Regular, PingFang SC; font-weight: 400; color: ${
                        colors.value.tooltipExtraCssTextColor
                    }; line-height: 14px;`,
                    formatter: (value: any, index: number) => {
                        if (!Array.isArray(value) || value.length <= 0) {
                            return `${index}数据格式错误`
                        }
                        // 无法解析回调return的html字符串
                        let itemDate = ''
                        let listText = value
                            .map((item, index) => {
                                if (index === 0) {
                                    itemDate = item.axisValue
                                }
                                if (item && typeof item.value === 'number') {
                                    return `<br/>${item.marker} ${
                                        item.seriesName
                                    } ${item.value.toFixed(2)}`
                                }
                                return ''
                            })
                            .filter((item) => {
                                return item !== ''
                            })
                            .join('')
                        return itemDate + listText
                    },
                },
                xAxis: {
                    show: true,
                    type: 'category',
                    boundaryGap: false,
                    data: props.xData,
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
                        color: colors.value.xAxisAxisLabelColor,
                        interval: 0, //使x轴文字显示全
                        formatter: (value: string, index: number) => {
                            if (index === 0 || index === lastIndex.value) {
                                return value
                            }
                            return ''
                        },
                    },
                },
                yAxis: [
                    {
                        name: props.factorTitle,
                        type: 'value',
                        show: true,
                        axisLine: {
                            show: true, // 不显示坐标轴轴线
                            lineStyle: {
                                color: colors.value.yAxisAxisLineLineStyleColor,
                            },
                        },
                        axisTick: {
                            show: true, // 不显示刻度
                            inside: true,
                            lineStyle: {
                                color: colors.value.yAxisAxisTickLineStyleColor,
                            },
                        },
                        splitLine: {
                            show: false, // 不显示网管线
                        },
                        axisLabel: {
                            show: true,
                            inside: false, // 刻度标签是否朝内，默认朝外。
                            fontSize: 10,
                            color: colors.value.yAxisAxisLabelColor,
                            formatter: (value: string, index: number) => {
                                return value
                            },
                        },
                    },
                    {
                        name: props.positionTitle,
                        type: 'value',
                        show: true,
                        // inverse: false,// 镜像
                        axisLine: {
                            show: true, // 不显示坐标轴轴线
                            lineStyle: {
                                color: colors.value.yAxisAxisLineLineStyleColor,
                            },
                        },
                        axisTick: {
                            show: true, // 不显示刻度
                            inside: true,
                            lineStyle: {
                                color: colors.value.yAxisAxisTickLineStyleColor,
                            },
                        },
                        splitLine: {
                            show: false, // 不显示网管线
                        },
                        axisLabel: {
                            show: true,
                            inside: false, // 刻度标签是否朝内，默认朝外。
                            fontSize: 10,
                            color: colors.value.yAxisAxisLabelColor,
                            formatter: (value: string, index: number) => {
                                return `${value}%`
                            },
                        },
                    },
                ],
                visualMap: [
                    {
                        seriesIndex: 0,
                        showLabel: false,
                        show: false,
                        pieces: props.factorVisualMapPieces,
                    },
                    {
                        seriesIndex: 1,
                        showLabel: false,
                        show: false,
                        pieces: props.positionVisualMapPieces,
                    },
                ],
                series: [
                    {
                        name: props.factorTitle,
                        yAxisIndex: 0,
                        type: 'line',
                        lineStyle: {
                            width: 2,
                        },
                        emphasis: {
                            lineStyle: {
                                width: 2, // hover时的折线宽度
                            },
                        },
                        data: props.factorYData.map((value, index) => {
                            return {
                                value,
                                symbol: 'none',
                            }
                        }),
                    },
                    {
                        name: props.positionTitle,
                        yAxisIndex: 1,
                        type: 'line',
                        lineStyle: {
                            width: 2,
                        },
                        emphasis: {
                            lineStyle: {
                                width: 2, // hover时的折线宽度
                            },
                        },
                        markLine: {
                            symbol: 'none', //去掉箭头
                            animation: false,
                            label: {
                                show: false,
                            },
                            lineStyle: {
                                color: colors.value.seriesLineMarkLineLineStyle,
                                type: 'dashed',
                                width: 1, // 正常时的折线宽度
                            },
                            emphasis: {
                                disabled: true, // 从 v5.3.0 开始支持
                                lable: {
                                    show: false,
                                },
                                lineStyle: {
                                    color: colors.value.seriesLineMarkLineEmphasisLineStyle,
                                    type: 'dashed',
                                    width: 1, // 正常时的折线宽度
                                },
                            },
                            data: seriesMarkLineData.value,
                        },
                        data: props.positionYData.map((value, index) => {
                            return {
                                value: value,
                                symbol: 'none',
                            }
                        }),
                    },
                ],
            }
        })

        /**
         * 导出chart
         */
        const chart = computed(() => {
            const nowChart = lineChart.value
            if (nowChart === null) {
                return null
            }
            return nowChart.chart
        })
        context.expose({
            chart,
        })
        return {
            lineChart,
            echartsOption,
        }
    },
    components: {
        DwLineChart,
    },
})
</script>
