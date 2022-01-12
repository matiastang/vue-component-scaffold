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
        type: () => number[];
        default: () => number[];
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
     * 最大回撤点，x轴数据
     */
    maxDownDate: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 最大回撤值
     */
    maxDownValue: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 最大回撤样式
     */
    downStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    echartsOption: {
        grid: {
            left: string;
            right: string;
            top: string;
            bottom: string;
            containLabel: boolean;
        };
        xAxis: {
            show: boolean;
            type: string;
            boundaryGap: boolean;
            data: string[];
        };
        yAxis: {
            show: boolean;
        };
        series: {
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
            showAllSymbol: boolean;
            smooth: boolean;
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            data: {
                value: number;
                itemStyle: {
                    color: string;
                    borderColor: string;
                };
                symbol: string;
                symbolSize: number;
            }[];
        }[];
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    xData?: unknown;
    yData?: unknown;
    chartStyle?: unknown;
    maxDownDate?: unknown;
    maxDownValue?: unknown;
    downStyle?: unknown;
} & {
    themeKey: string;
    xData: string[];
    yData: number[];
    chartStyle: Record<string, any>;
    maxDownDate: string;
    maxDownValue: number;
    downStyle: Record<string, any>;
} & {}>, {
    themeKey: string;
    xData: string[];
    yData: number[];
    chartStyle: Record<string, any>;
    maxDownDate: string;
    maxDownValue: number;
    downStyle: Record<string, any>;
}>;
export default _default;
