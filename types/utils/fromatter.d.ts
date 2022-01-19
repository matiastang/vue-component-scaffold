declare const bigDataFormatter: (number: number, fixedLen?: number) => string;
declare const moneyFormatter: (number: number, fixedLen?: number, suffix?: string) => string;
/**
 * 去除数字字符串小数点儿后全为0的情况
 */
declare const removeZeroSuffix: (value: string) => string;
export { bigDataFormatter, moneyFormatter, removeZeroSuffix };
