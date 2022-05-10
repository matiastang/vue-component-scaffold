<!--
 * @Author: matiastang
 * @Date: 2022-05-09 10:46:25
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-10 16:35:44
 * @FilePath: /dw-vue-components/components/dwLineChart/src/DwLineChart.vue
 * @Description: 折线图
-->
<template>
    <DwEcharts
        class="dw-vue-line-echart"
        ref="lineChart"
        :theme-key="themeKey"
        :echarts-option="chartOption"
    ></DwEcharts>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, PropType, computed } from 'vue'
import DwEcharts from '../../dwEcharts'
import { ECBasicOption, EChartsOption } from 'echarts/types/dist/shared'

export default defineComponent({
    name: 'DwLineChart',
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
         * echarts配置
         */
        echartsOption: {
            type: Object as PropType<ECBasicOption>,
        },
    },
    setup(props, context) {
        // 导出
        const lineChart: Ref<any> = ref(null)
        /**
         * 自定义 tooltip - position 显示位置
         * @param point
         * @param params
         * @param dom
         * @param rect
         * @param size
         */
        const tooltipPosition = (point: any, params: any, dom: any, rect: any, size: any) => {
            /*
             * 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
             * 高度居中
             */
            const pointX = point[0] as number
            const viewSize = size.viewSize as number[]
            const viewHalfW = viewSize[0] / 2
            const viewHalfH = viewSize[1] / 2
            const contentSize = size.contentSize as number[]
            const contentHalfH = contentSize[1] / 2
            if (pointX < viewHalfW) {
                return [pointX, viewHalfH - contentHalfH]
            }
            return [pointX - contentSize[0], viewHalfH - contentHalfH]
        }
        /**
         * 取值范围
         * @param data
         */
        const yAxisDataRange = (data: (number | null)[]) => {
            const allData = data.filter((item) => {
                return item !== null
            }) as number[]
            let min = Math.min(...allData)
            let max = Math.max(...allData)
            const diff = max - min
            min = min - diff / 10
            max = max + diff / 10
            return {
                min: Math.floor(min * 10) / 10,
                max: Math.ceil(max * 10) / 10,
            }
        }
        /**
         * 组装参数
         */
        const chartOption = computed(() => {
            const option = props.echartsOption
            if (!option) {
                return option
            }
            const chartOtpion = option as EChartsOption
            // 位置设置
            const tooltip = chartOtpion.tooltip
            if (tooltip) {
                if (Array.isArray(tooltip)) {
                    console.warn('TODO: - set postion in tooltip is array')
                } else {
                    const tooltipShow = tooltip.show
                    if (tooltipShow || tooltipShow === undefined) {
                        const postion = tooltip.position
                        if (postion === undefined) {
                            tooltip.position = tooltipPosition
                        }
                    }
                }
            }
            // 数据范围设置
            const yAxis = chartOtpion.yAxis
            if (yAxis) {
                if (Array.isArray(yAxis)) {
                    console.info('TODO: - set yAxis min and max in yAxis is array')
                } else {
                    const yAxisShow = yAxis.show
                    if (yAxisShow || yAxisShow === undefined) {
                        const min = yAxis.min
                        const max = yAxis.max
                        const series = chartOtpion.series
                        let values = [] as (number | null)[]
                        if (series) {
                            if (Array.isArray(series)) {
                                values = series
                                    .map((item) => {
                                        const lineData = item.data as
                                            | (number | null)[]
                                            | {
                                                  value: number | null
                                              }[]
                                        // FIXME: - string | number | Date;
                                        return lineData.map((values) => {
                                            if (typeof values !== 'object') {
                                                return values
                                            }
                                            if (values === null) {
                                                return values
                                            }
                                            return values.value
                                        })
                                    })
                                    .flat()
                            } else {
                                const lineData = series.data as
                                    | (number | null)[]
                                    | {
                                          value: number | null
                                      }[]
                                // FIXME: - string | number | Date;
                                values = lineData
                                    .map((values) => {
                                        if (typeof values !== 'object') {
                                            return values
                                        }
                                        if (values === null) {
                                            return values
                                        }
                                        return values.value
                                    })
                                    .flat()
                            }
                        }
                        const range = yAxisDataRange(values)
                        if (min === undefined) {
                            yAxis.min = range.min
                        }
                        if (max === undefined) {
                            yAxis.max = range.max
                        }
                    }
                }
            }
            // console.info('option', option)
            return option
        })
        const chart = computed(() => {
            const nowChart = lineChart.value
            if (nowChart === null) {
                return null
            }
            return nowChart.eChart
        })
        context.expose({
            chart,
        })
        return {
            lineChart,
            chartOption,
        }
    },
    components: {
        DwEcharts,
    },
})
</script>
