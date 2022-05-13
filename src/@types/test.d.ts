/*
 * @Author: matiastang
 * @Date: 2022-05-13 10:18:03
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-13 10:40:31
 * @FilePath: /dw-vue-components/src/@types/test.d.ts
 * @Description:
 */
export interface TradeoffCurveInfo {
    deviation: number
    avg: number
    list: TradeoffCurveItem[]
}

export interface TradeoffCurveItem {
    tradeDate: string
    rltvValue: number
}

export interface PositionCurveItem {
    tradeDate: string
    value: number
}

export interface FactorCurveItem {
    tradeDate: string
    ftrRtn: number
}
