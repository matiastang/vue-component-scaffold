interface lineYData {
    lineOneData: number[];
    lineTwoData: number[];
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
            lineOneData: number[];
            lineTwoData: number[];
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
     * 是否显示创建时点
     */
    createPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 当前选择项索引
     */
    currCheckedIndex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 创建时点
     */
    createDate: {
        type: StringConstructor;
        default: string;
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
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            showAllSymbol: boolean;
            triggerLineEvent: boolean;
            markPoint: {
                symbol: string;
                itemStyle: {
                    color: string;
                };
                symbolSize: number;
                symbolOffset: number;
                data: {
                    name: string;
                    value: number;
                    xAxis: string | number;
                    yAxis: string | number;
                }[];
                label: {
                    fontSize: number;
                    position: string;
                    offset: number[];
                    color: string;
                    fontWeight: number;
                    formatter: string;
                };
            };
            markLine: {
                symbol: string;
                silent: boolean;
                data: {
                    xAxis: string | number;
                    label: {
                        show: boolean;
                        position: string;
                        formatter: string;
                        color: string;
                        rotate: string;
                        fontSize: number;
                        fontWeight: number;
                        padding: number[];
                    };
                }[];
                lineStyle: {
                    normal: {
                        type: string;
                        color: string;
                        symbol: string;
                    };
                };
            };
            data: ({
                value: number;
                itemStyle: {
                    color: string;
                    borderColor: string;
                };
                symbol: string;
                symbolSize: number;
            } | {
                value: number;
                itemStyle: {
                    color: string;
                    borderColor?: undefined;
                };
                symbol: string;
                symbolSize: number;
            })[];
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
            showAllSymbol?: undefined;
            triggerLineEvent?: undefined;
            markPoint?: undefined;
            markLine?: undefined;
        })[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    xData?: unknown;
    yData?: unknown;
    chartStyle?: unknown;
    createPoint?: unknown;
    currCheckedIndex?: unknown;
    createDate?: unknown;
} & {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
    createPoint: boolean;
    currCheckedIndex: number;
    createDate: string;
} & {}>, {
    themeKey: string;
    xData: string[];
    yData: lineYData;
    chartStyle: Record<string, any>;
    createPoint: boolean;
    currCheckedIndex: number;
    createDate: string;
}>;
export default _default;
