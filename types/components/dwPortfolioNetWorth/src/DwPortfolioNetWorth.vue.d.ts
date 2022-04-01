import { Ref } from 'vue';
interface lineYData {
    /**
     * 单位净值
     */
    lineNetWorthData: Array<number | null>;
    /**
     * 均线
     */
    lineAverageData: Array<number | null>;
    /**
     * 历史最优均线
     */
    lineOptimalData: Array<number | null>;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * 主题
     */
    themeKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * x轴数据
     */
    xData: {
        type: () => string[];
        default: () => string[];
    };
    /**
     * y轴数据
     */
    yData: {
        type: () => lineYData;
        default: () => {
            lineOptimalData: (number | null)[];
            lineAverageData: number[];
            lineNetWorthData: number[];
        };
    };
    /**
     * chart样式
     */
    chartStyle: {
        type: ObjectConstructor;
        default: () => {
            width: string;
            height: string;
        };
    };
    /**
     * 单位
     */
    unit: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 数据长度
     */
    dataLen: {
        type: NumberConstructor;
        default: number;
    };
}, {
    chart: Ref<any>;
    echartsOption: import("vue").ComputedRef<{
        grid: {
            left: string;
            right: string;
            top: string;
            bottom: string;
            containLabel: boolean;
        };
        tooltip: {
            trigger: string;
            position: (point: any, params: any, dom: any, rect: any, size: any) => number[];
            formatter: (value: any, index: number) => string;
        };
        xAxis: {
            show: boolean;
            type: string;
            boundaryGap: boolean;
            data: string[];
            axisLine: {
                show: boolean;
            };
            axisTick: {
                show: boolean;
            };
            axisLabel: {
                show: boolean;
                fontSize: number;
                color: string;
                formatter: (value: string, index: number) => string;
            };
        };
        yAxis: {
            show: boolean;
            axisLabel: {
                show: boolean;
                inside: boolean;
                fontSize: number;
                color: string;
                formatter: (value: string, index: number) => string;
            };
            min: number;
            max: number;
        };
        series: ({
            type: string;
            lineStyle: {
                color: string;
                width: number;
            };
            areaStyle: {
                color: {
                    type: string;
                    x: number;
                    y: number;
                    x2: number;
                    y2: number;
                    colorStops: {
                        offset: number;
                        color: string;
                    }[];
                    global: boolean;
                };
            };
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            showAllSymbol: boolean;
            triggerLineEvent: boolean;
            data: {
                value: number | null;
                itemStyle: {
                    color: string;
                };
                symbol: string;
                symbolSize: number;
            }[];
        } | {
            type: string;
            lineStyle: {
                color: string;
                width: number;
            };
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            data: {
                value: number | null;
                itemStyle: {
                    color: string;
                };
                symbol: string;
                symbolSize: number;
            }[];
            areaStyle?: undefined;
            showAllSymbol?: undefined;
            triggerLineEvent?: undefined;
        })[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    xData?: unknown;
    yData?: unknown;
    chartStyle?: unknown;
    unit?: unknown;
    dataLen?: unknown;
} & {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
    unit: string;
    dataLen: number;
} & {}>, {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
    unit: string;
    dataLen: number;
}>;
export default _default;
