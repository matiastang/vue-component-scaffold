<!--
 * @Author: matiastang
 * @Date: 2022-02-14 16:02:04
 * @LastEditors: matiastang
 * @LastEditTime: 2022-02-15 10:25:46
 * @FilePath: /dw-vue-components/components/dwFilterRuler/src/DwFilterRuler.vue
 * @Description: 
-->
<template>
    <div class="dw-ruler">
        <div class="scale-lines">
            <div
                class="scale-line-container"
                v-for="(item, index) in range"
                :key="item"
                :style="{ width: `${100 / range.length}%` }"
            >
                <div class="ruler-texts">
                    <div class="ruler-text" :style="{ color: `${rulerColor}` }">{{ item }}</div>
                    <div
                        class="scale-line"
                        :style="{ height: '0.6rem', background: `${rulerColor}` }"
                    ></div>
                </div>
                <div
                    v-if="index !== range.length - 1"
                    class="scale-line"
                    :style="{ height: '0.3rem', background: `${rulerColor}` }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DwFilterRuler',
    props: {
        /**
         * 范围（默认0%-100%）
         */
        range: {
            type: Array as () => string[],
            default: () => [
                '0%',
                '10%',
                '20%',
                '30%',
                '40%',
                '50%',
                '60%',
                '70%',
                '80%',
                '90%',
                '100%',
            ],
        },
        /**
         * 颜色
         */
        rulerColor: {
            type: String,
            default: '#7c7c7c',
        },
    },
})
</script>

<style lang="scss" scoped>
.dw-ruler {
    width: 100%;
    .scale-lines {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .scale-line-container {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            .ruler-texts {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .ruler-text {
                    color: #7c7c7c;
                    font-size: 0.8rem;
                    text-align: center;
                }
                .scale-line {
                    width: 0.1rem;
                    background: #7c7c7c;
                }
            }
            .scale-line {
                width: 0.1rem;
                background: #7c7c7c;
            }
        }
    }
}
</style>
