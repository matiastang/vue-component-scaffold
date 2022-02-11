<!--
 * @Author: matiastang
 * @Date: 2022-02-11 17:52:50
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-11 18:02:32
 * @FilePath: /dw-vue-components/components/dwFilterArea/src/DwFilterArea.vue
 * @Description: DwFilterArea
-->
<template>
    <div class="dw-area">
        <canvas ref="areaCanvasElement" class="dw-area-canvas"></canvas>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, toRefs, computed } from 'vue'
export default defineComponent({
    name: 'DwFilterArea',
    props: {
        /**
         * 开始位置, 当小于0时表示固定最小值为0
         */
        startValue: {
            type: Number,
            default: Number.MIN_SAFE_INTEGER,
        },
        /**
         * 结束位置, 当大于100时表示固定最大值为100
         */
        endValue: {
            type: Number,
            default: Number.MAX_SAFE_INTEGER,
        },
        //         {data: 0, number: 3727}
        // 1: {data: 1, number: 2746}
        // 2: {data: 2, number: 1674}
        // 3: {data: 3, number: 1160}
        // 4: {data: 4, number: 1169}
        // 5: {data: 5, number: 1394}
        // 6: {data: 6, number: 1022}
        // 7: {data: 7, number: 483}
        // 8: {data: 8, number: 362}
        // 9: {data: 9, number: 261}
        // 10: {data: 10, number: 168}
        // 11: {data: 11, number: 156}
        // 12: {data: 12, number: 142}
        // 13: {data: 13, number: 112}
        // 14: {data: 14, number: 59}
        // 15: {data: 15, number: 97}
    },
    emits: {
        /**
         * 更新开始位置
         */
        'update:startValue': (value: number) => {
            return true
        },
        /**
         * 更新结束位置
         */
        'update:endValue': (value: number) => {
            return true
        },
    },
    setup(props, context) {
        const { startValue, endValue } = toRefs(props)
        const areaCanvasElement: Ref<HTMLElement | null> = ref(null)
        // left百分比
        const leftWidth = computed(() => {
            if (startValue.value < 0) {
                return 0
            }
            return startValue.value
        })
        // 大于
        // 是否隐藏大于，当单边小于时隐藏
        const greaterHidden = computed(() => {
            return startValue.value < 0
        })
        const greaterLeft = computed(() => {
            if (sliderTrackElement.value === null) {
                return startValue.value
            }
            // 总长
            const max = sliderTrackElement.value.clientWidth
            return startValue.value - (14 / max) * 100
        })
        const greaterMoving = ref(false)
        const greaterElement: Ref<HTMLElement | null> = ref(null)
        const greaterTouchStart = (e: TouchEvent) => {
            greaterMoving.value = true
        }
        const greaterTouchEnd = () => {
            greaterMoving.value = false
        }
        const greaterTouchMove = (e: TouchEvent) => {
            if (sliderTrackElement.value === null || !greaterMoving.value) {
                return
            }
            // left
            let x = e.changedTouches[0].clientX
            // 总长
            const max = sliderTrackElement.value.clientWidth
            if (x < 0) {
                x = 0
            }
            if (x > max) {
                x = max
            }
            const startValue = (x / max) * 100
            context.emit('update:startValue', startValue)
        }
        // 小于
        // 是否隐藏小于，当单边大于时隐藏
        const lessHidden = computed(() => {
            return endValue.value > 100
        })
        const lessLeft = computed(() => {
            if (sliderTrackElement.value === null) {
                return endValue.value
            }
            // 总长
            const max = sliderTrackElement.value.clientWidth
            return endValue.value - (14 / max) * 100
        })
        const lessMoving = ref(false)
        const lessElement: Ref<HTMLElement | null> = ref(null)
        const lessTouchStart = (e: TouchEvent) => {
            lessMoving.value = true
        }
        const lessTouchEnd = () => {
            lessMoving.value = false
        }
        const lessTouchMove = (e: TouchEvent) => {
            if (sliderTrackElement.value === null || !lessMoving.value) {
                return
            }
            // left
            let x = e.changedTouches[0].clientX
            // 总长
            const max = sliderTrackElement.value.clientWidth
            if (x < 0) {
                x = 0
            }
            if (x > max) {
                x = max
            }
            const endValue = (x / max) * 100
            context.emit('update:endValue', endValue)
        }
        // left百分比
        const rightWidth = computed(() => {
            if (endValue.value > 100) {
                return 100
            }
            return endValue.value
        })

        import { onMounted, ref, toRefs, watchEffect, nextTick } from 'vue'
        import { Indicator } from 'src/@types'
        import { match } from 'assert'
        const area = ref()
        const _ctx = ref()
        const _props = defineProps<{
            chart: Indicator.chart
            type: number
            start: number
            end: number
        }>()

        const { type, chart, start, end } = toRefs(_props)
        watchEffect(() => {
            nextTick(() => {
                window.requestAnimationFrame(draw)
            })
            return start.value
        })
        watchEffect(() => {
            nextTick(() => {
                window.requestAnimationFrame(draw)
            })
            return end.value
        })
        watchEffect(() => {
            nextTick(() => {
                window.requestAnimationFrame(draw)
            })
            return chart.value
        })

        const draw = () => {
            const canvas = area.value
            if (!canvas.getContext) return
            const ctx = area.value.getContext('2d')
            _ctx.value = ctx
            const ratio = window.devicePixelRatio || 1
            // ctx.scale(ratio, ratio);
            const width = canvas.width
            const height = canvas.height
            ctx.clearRect(0, 0, width, height)
            function generatePoints() {
                const pts = []
                const data = chart.value || []
                if (data) {
                    const max = Math.max(...data.map((it) => it?.number || 0))
                    const maxData = Math.max(...data.map((it) => it?.data || 0))
                    for (let i = 0; i < data.length; i++) {
                        // pts.push({
                        //   x: (i / data.length) * width,
                        //   // x: ((data[i]?.data || 0) / maxData) * width,
                        //   y: height - ((data[i]?.number || 0) / max) * height,
                        //   // y:0
                        // });
                        const item = data[i]
                        if (item) {
                            const value = item.number
                            pts.push({
                                x: (i / (data.length - 1)) * width,
                                y: height - ((value !== null ? value : 0) / max) * height,
                            })
                        }
                    }
                }
                return pts
            }
            function plotPoints() {
                const pts = generatePoints()
                // first plot the stroke
                const maxY = height //Math.max.apply(null, pts.map(pt=>pt.y));
                ctx.save()
                ctx.beginPath()
                ctx.moveTo(0, maxY)
                ctx.fillStyle = '#f7f7f7'
                pts.forEach((pt) => ctx.lineTo(pt.x, pt.y))
                // now define the bottom of the filled area
                // draw the missing parts
                ctx.lineTo(pts[pts.length - 1].x, maxY) // bottom-right
                ctx.lineTo(pts[0].x, maxY) // bottom-left
                // ctx.globalCompositeOperation = "destination-over"; // draw behind
                ctx.closePath()
                ctx.fill() // will close the path for us
                ctx.restore()
                let _start = (start.value / 100) * width
                let _end = (end.value / 100) * width
                if (type.value === 3 || type.value === 4) {
                    _start = (start.value / end.value) * width
                    _end = width
                }
                const ract_pts = pts.filter((it) => it.x >= _start && it.x <= _end)
                if (ract_pts.length) {
                    ctx.beginPath()
                    ctx.moveTo(ract_pts[0].x, maxY)
                    ctx.fillStyle = '#FFECE0'
                    ract_pts.forEach((pt) => ctx.lineTo(pt.x, pt.y))
                    ctx.lineTo(ract_pts[ract_pts.length - 1].x, maxY) // bottom-right
                    ctx.closePath()
                    ctx.fill() // will close the path for us
                }
                ctx.globalCompositeOperation = 'source-over' // normal behavior
            }

            plotPoints()
        }
        onMounted(() => {
            nextTick(() => {
                window.requestAnimationFrame(draw)
            })
        })

        return {
            areaCanvasElement,
            leftWidth,
            greaterElement,
            greaterLeft,
            greaterHidden,
            greaterTouchStart,
            greaterTouchEnd,
            greaterTouchMove,
            lessElement,
            lessLeft,
            lessHidden,
            lessTouchStart,
            lessTouchEnd,
            lessTouchMove,
            rightWidth,
        }
    },
})
</script>
<style lang="scss" scoped>
.dw-slider {
    width: 100%;
    padding: 15px 0;
    .dw-slider-track {
        width: 100%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
        .dw-slider-greater {
            display: inline;
            position: absolute;
            top: -1.35rem;
            width: 2.8rem;
            height: 2.8rem;
            z-index: 9;
        }
        .dw-slider-center-track {
            position: absolute;
            top: '0rem';
            height: 2px;
            background: #ff6d1b;
        }
        .dw-slider-less {
            position: absolute;
            top: -1.35rem;
            width: 2.8rem;
            height: 2.8rem;
            z-index: 9;
        }
    }
}
</style>
