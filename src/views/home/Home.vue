<!--
 * @Author: matiastang
 * @Date: 2021-12-29 10:52:57
 * @LastEditors: matiastang
 * @LastEditTime: 2022-03-07 14:07:08
 * @FilePath: /dw-vue-components/src/views/home/Home.vue
 * @Description: 
-->
<template>
    <div class="home">
        <!-- left-top-url="static/bg/bg-left-top.png"
        right-bottom-url="static/bg/bg-right-bottom.png" -->
        <DwPortfolioBg class="home-bg" style="height: auto">
            <template v-slot:leftTopImg>
                <img src="static/bg/bg-left-top.png" style="width: 28rem; height: 28rem" />
            </template>
            <div class="text">{{ text }}</div>
            <!-- <DwWechatLogin
                appid="wx6d902dc1624282c4"
                scope="snsapi_login"
                :state="wechatState"
                :redirect_uri="redirect_uri"
            ></DwWechatLogin> -->
            <!-- <DwDragVerify @dragSuccess="dragSuccess"></DwDragVerify> -->
            <DwStocksAnalysisLine
                :analyzeType="AnalyzeType.HLD_MKT_VALUE"
                :reportType="ReportType.QUAETER"
                @arge-screen="argeScreenAction"
                fullScreenUrl="static/openAlpha/full-screen.png"
            />
            <DwPortfolioIcon />
            <DwPortfolioLine />
            <DwPortfolioPie
                :data="pieData"
                :chartStyle="{
                    width: '60%',
                    height: '10rem',
                }"
            />
            <DwPortfolioIndustry :data="industryData.value" @tooltipAction="tooltipAction" />
            <div @click="pieDataChangeAction">切换数据</div>

            <template v-slot:rightBottomImg>
                <img src="static/bg/bg-right-bottom.png" style="width: 28rem; height: 28rem" />
            </template>
        </DwPortfolioBg>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import {
    DwWechatLogin,
    DwDragVerify,
    DwPortfolioBg,
    DwPortfolioIcon,
    DwPortfolioLine,
    DwPortfolioPie,
    DwPortfolioIndustry,
} from 'datumwealth-vue-components'
import { DwStocksAnalysisLine, AnalyzeType, ReportType } from 'datumwealth-vue-components'
// import {
//     IndustryBondStockData,
//     IndustryMainData,
// } from 'datumwealth-vue-components/components/dwPortfolioTypes/index'
// import {
//     DwPortfolioBg,
//     DwPortfolioIcon,
//     DwPortfolioLine,
//     DwPortfolioPie,
//     DwPortfolioIndustry,
//     DwStocksAnalysisLine,
//     AnalyzeType,
//     ReportType,
// } from 'root/components/index'
// import DwStocksAnalysisLine, { AnalyzeType, ReportType } from 'root/components/dwStocksAnalysisLine'
import { IndustryBondStockData, IndustryMainData } from 'root/components/dwPortfolioTypes'

const argeScreenAction = () => {
    console.log('点击了大屏查看')
}

// const pieData = reactive({
//     value: [
//         { value: 0.2503, name: '股票' },
//         { value: 0.7497, name: '债券' },
//     ],
// })
const industryData = reactive({
    value: [
        { tradeDt: '20210709', bondWeight: 0.7497, stockWeight: 0.2503 },
        { tradeDt: '20210712', bondWeight: 0.7476, stockWeight: 0.2524 },
        { tradeDt: '20210713', bondWeight: 0.7471, stockWeight: 0.2529 },
        { tradeDt: '20210714', bondWeight: 0.7493, stockWeight: 0.2507 },
        { tradeDt: '20210715', bondWeight: 0.7471, stockWeight: 0.2529 },
        { tradeDt: '20210716', bondWeight: 0.7488, stockWeight: 0.2512 },
        { tradeDt: '20210719', bondWeight: 0.7486, stockWeight: 0.2514 },
        { tradeDt: '20210720', bondWeight: 0.7487, stockWeight: 0.2513 },
        { tradeDt: '20210721', bondWeight: 0.7474, stockWeight: 0.2526 },
        { tradeDt: '20210722', bondWeight: 0.7469, stockWeight: 0.2531 },
    ] as (IndustryBondStockData | IndustryMainData)[],
})
const pieDataChangeAction = () => {
    console.log(pieData.value.length === 2 ? '切换为行业' : '切换为大类')
    if (pieData.value.length === 2) {
        // pieData.value = [
        //     { value: 0.1686, name: '金融' },
        //     { value: 0.1599, name: 'TMT' },
        //     { value: 0.2529, name: '消费' },
        //     { value: 0.0421, name: '周期上游' },
        //     { value: 0.0813, name: '周期中游' },
        //     { value: 0.1452, name: '周期下游' },
        //     { value: 0.0917, name: '公共事业' },
        //     { value: 0.0584, name: '医药生物' },
        // ]
        industryData.value = [
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210709',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210712',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210713',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210714',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210715',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210716',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210719',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210720',
            },
            {
                backWeight: 0.1191,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.11805,
                tradeDt: '20210721',
            },
            {
                backWeight: 0.1091,
                commonWeight: 0.110275,
                consumerWeight: 0.245025,
                financialWeight: 0.1804,
                frontWeight: 0.059575,
                medicineWeight: 0.0767,
                middleWeight: 0.090875,
                tmtWeight: 0.12805,
                tradeDt: '20210722',
            },
        ] as IndustryMainData[]
        return
    }
    // pieData.value = [
    //     { value: 0.2503, name: '股票' },
    //     { value: 0.7497, name: '债券' },
    // ]
    industryData.value = [
        { tradeDt: '20210709', bondWeight: 0.7497, stockWeight: 0.2503 },
        { tradeDt: '20210712', bondWeight: 0.7476, stockWeight: 0.2524 },
        { tradeDt: '20210713', bondWeight: 0.7471, stockWeight: 0.2529 },
        { tradeDt: '20210714', bondWeight: 0.7493, stockWeight: 0.2507 },
        { tradeDt: '20210715', bondWeight: 0.7471, stockWeight: 0.2529 },
        { tradeDt: '20210716', bondWeight: 0.7488, stockWeight: 0.2512 },
        { tradeDt: '20210719', bondWeight: 0.7486, stockWeight: 0.2514 },
        { tradeDt: '20210720', bondWeight: 0.7487, stockWeight: 0.2513 },
        { tradeDt: '20210721', bondWeight: 0.7474, stockWeight: 0.2526 },
        { tradeDt: '20210722', bondWeight: 0.7469, stockWeight: 0.2531 },
    ] as IndustryBondStockData[]
}

const pieTradeDt = ref('20210722')
const pieData = computed(() => {
    const pieItem = industryData.value.find((element) => {
        return element.tradeDt === pieTradeDt.value
    })
    if (pieItem !== undefined && pieItem.backWeight === undefined) {
        const item = pieItem as IndustryBondStockData
        console.log(item)
        return [
            { value: item.stockWeight, name: '股票' },
            { value: item.bondWeight, name: '债券' },
        ]
    }
    const item = pieItem as IndustryMainData
    console.log(item)
    return [
        { value: item.financialWeight, name: '金融' },
        { value: item.tmtWeight, name: 'TMT' },
        { value: item.consumerWeight, name: '消费' },
        { value: item.frontWeight, name: '周期上游' },
        { value: item.middleWeight, name: '周期中游' },
        { value: item.backWeight, name: '周期下游' },
        { value: item.commonWeight, name: '公共事业' },
        { value: item.medicineWeight, name: '医药生物' },
    ]
})

const tooltipAction = (values: any) => {
    // console.log(values)
    // axisValue: "20210719"
    // axisValueLabel: "20210719"
    // name: "20210719"
    // seriesId: "\u0000股票\u00000"
    // seriesIndex: 0
    // seriesName: "公共事业"
    // seriesType: "line"
    // value: 0.110275
    pieTradeDt.value = values[0].axisValue
}

const stateUUID = Math.round(Math.random() * 100 + 100)
console.log(`成功uuid:${stateUUID}`)
const wechatState = ref(stateUUID.toString())

/**
 * 重定向地址
 */
const redirect_uri = computed(() => {
    const uri = 'https://openalpha.cn/login'
    console.log(uri)
    const redirect_uri = encodeURI(uri)
    return redirect_uri
})

/**
 * 滑块验证通过
 */
const dragSuccess = () => {
    ElMessage.success('滑块验证通过')
}

const text = ref('home')
</script>

<style lang="scss" scoped>
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
            font-size: fontSize(14px);
            @include defaultFont;
            color: $placeholderColor;
            line-height: 20px;
            text-align: center;
        }
    }
}
</style>
