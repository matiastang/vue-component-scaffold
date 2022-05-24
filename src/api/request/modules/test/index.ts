/*
 * @Author: matiastang
 * @Date: 2022-05-13 10:06:53
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-13 10:40:40
 * @FilePath: /dw-vue-components/src/api/request/modules/test/index.ts
 * @Description:
 */
import http from '@/api/request/request'
import { testDefectPrefix } from '@/api/request/prefix'
import { TradeoffCurveInfo, PositionCurveItem, FactorCurveItem } from '@/@types/index'
/**
 * 权益性价比（趋势跟踪）
 * @param indexCode
 * @param range
 * @returns
 */
const tradeoffCurve = (indexCode: string, range: string) => {
    return http.get<TradeoffCurveInfo>(`${testDefectPrefix}/tradeoff/curve`, {
        indexCode,
        range,
    })
}

/**
 * 公募仓位（趋势跟踪）
 * @param classifyCode
 * @param range
 * @returns
 */
const positionCurve = (classifyCode: string, range: string) => {
    return http.get<PositionCurveItem[]>(`${testDefectPrefix}/position/curve`, {
        classifyCode,
        range,
    })
}

/**
 * 风格因子价值因子（趋势跟踪）
 * @param range
 * @param factor
 * @returns
 */
const factorCurve = (range: string, factor: string = 'quality') => {
    return http.get<FactorCurveItem[]>(`${testDefectPrefix}/factor/curve`, {
        range,
        factor,
    })
}

export { tradeoffCurve, positionCurve, factorCurve }
