<!--
 * @Author: matiastang
 * @Date: 2022-02-11 11:31:36
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-11 17:46:33
 * @FilePath: /dw-vue-components/components/dwFilterSlider/src/DwFilterSlider.vue
 * @Description: 
-->
<template>
    <div class="dw-slider">
        <div class="dw-slider-track" ref="sliderTrackElement">
            <div
                v-if="!greaterHidden"
                aria-label="大于滑块"
                @touchstart="greaterTouchStart"
                @touchmove="greaterTouchMove"
                @touchend="greaterTouchEnd"
                class="dw-slider-greater"
                :style="{
                    left: `${greaterLeft}%`,
                }"
            >
                <slot name="greaterImg"></slot>
            </div>
            <div
                :style="{
                    left: `${leftWidth}%`,
                    width: `${rightWidth - leftWidth}%`,
                }"
                class="dw-slider-center-track"
            ></div>
            <div
                v-if="!lessHidden"
                aria-label="小于滑块"
                @touchstart="lessTouchStart"
                @touchmove="lessTouchMove"
                @touchend="lessTouchEnd"
                class="dw-slider-less"
                :style="{
                    left: `${lessLeft}%`,
                }"
            >
                <slot name="lessImg"></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, toRefs, computed } from 'vue'
export default defineComponent({
    name: 'DwFilterSlider',
    props: {
        /**
         * 开始位置
         */
        startValue: {
            type: Number,
            default: Number.MIN_SAFE_INTEGER,
        },
        /**
         * 结束位置
         */
        endValue: {
            type: Number,
            default: Number.MAX_SAFE_INTEGER,
        },
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
        const sliderTrackElement: Ref<HTMLElement | null> = ref(null)
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
        return {
            sliderTrackElement,
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
