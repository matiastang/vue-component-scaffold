/*
 * @Author: matiastang
 * @Date: 2022-01-13 15:27:56
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-13 16:12:47
 * @FilePath: /dw-vue-components/components/utils/fromatter.ts
 * @Description: 转换函数
 */

const bigDataFormatter = (number: number) => {
    if (number > 0) {
        if (number >= 1000000000000) {
            return (number / 1000000000000).toFixed(2) + '万亿'
        } else if (number >= 100000000) {
            return (number / 100000000).toFixed(2) + '亿'
        } else if (number >= 10000) {
            return (number / 10000).toFixed(2) + '万'
        } else {
            return number.toFixed(2)
        }
    } else {
        if (number <= -1000000000000) {
            return (number / 1000000000000).toFixed(2) + '万亿'
        } else if (number <= -100000000) {
            return (number / 100000000).toFixed(2) + '亿'
        } else if (number <= -10000) {
            return (number / 10000).toFixed(2) + '万'
        } else {
            return number.toFixed(2)
        }
    }
}

const moneyFormatter = (number: number, suffix: string = '元') => {
    return bigDataFormatter(number) + suffix
}

export { bigDataFormatter, moneyFormatter }
