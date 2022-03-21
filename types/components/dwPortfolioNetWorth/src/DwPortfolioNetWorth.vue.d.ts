interface lineYData {
    /**
     * 单位净值
     */
    lineNetWorthData: number[];
    /**
     * 均线
     */
    lineAverageData: number[];
    /**
     * 历史最优均线
     */
    lineOptimalData: number[];
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
            lineOptimalData: number[];
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
}, {
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
                value: number;
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
                value: number;
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
} & {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
} & {}>, {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
}>;
export default _default;
