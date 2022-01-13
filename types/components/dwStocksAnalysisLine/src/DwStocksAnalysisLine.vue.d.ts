/**
 * 分析类型
 */
export declare enum AnalyzeType {
    /**
     * 数量
     */
    VOL_HLD_STOCK = 0,
    /**
     * 市值
     */
    HLD_MKT_VALUE = 1,
    /**
     * 占比
     */
    MKT_VAL_NET_ASSET = 2
}
/**
 * 数据来源
 */
export declare enum ReportType {
    /**
     * 日频
     */
    DAY = 1,
    /**
     * 季报
     */
    QUAETER = 2,
    /**
     * 年报
     */
    YEAR = 3
}
interface TooltipItem {
    axisDim: string;
    axisId: string;
    axisIndex: number;
    axisType: string;
    axisValue: string;
    axisValueLabel: string;
    borderColor: undefined;
    color: string;
    componentIndex: number;
    componentSubType: string;
    componentType: string;
    data: number;
    dataIndex: number;
    dataType: undefined;
    dimensionNames: string[];
    marker: string;
    name: string;
    seriesId: string;
    seriesIndex: number;
    seriesName: string;
    seriesType: string;
    value: number;
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
        type: () => number[];
        default: () => number[];
    };
    /**
     * 分析类型 数量0, 市值1, 占比2
     */
    analyzeType: {
        type: () => AnalyzeType;
        default: AnalyzeType;
    };
    /**
     * 数据来源 1日频  2季报  3年报
     */
    reportType: {
        type: () => ReportType;
        default: ReportType;
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
     * 大屏查看图片地址
     */
    fullScreenUrl: {
        type: StringConstructor;
    };
}, {
    selectDateIndex: import("vue").Ref<number>;
    dateList: import("vue").ComputedRef<{
        selected: boolean;
        value: string;
    }[]>;
    echartsOption: import("vue").ComputedRef<{
        tooltip: {
            trigger: string;
            axisPointer: {
                type: string;
                axis: string;
                snap: boolean;
                label: {
                    backgroundColor: string;
                };
                lineStyle: {
                    type: string;
                };
            };
            formatter: (values: TooltipItem[]) => string;
        };
        grid: {
            left: string;
            right: string;
            top: string;
            bottom: string;
            containLabel: boolean;
        };
        xAxis: {
            type: string;
            boundaryGap: boolean;
            data: string[];
            splitNumber: number;
            axisLine: {
                show: boolean;
                onZero: boolean;
                lineStyle: {
                    color: string;
                };
            };
            axisTick: {
                show: boolean;
                alignWithLabel: boolean;
            };
            splitLine: {
                show: boolean;
            };
            axisLabel: {
                show: boolean;
                fontSize: number;
                color: string;
                formatter: (value: string) => string;
            };
        };
        yAxis: {
            type: string;
            axisLine: {
                show: boolean;
                lineStyle: {
                    color: string;
                };
            };
            axisTick: {
                show: boolean;
            };
            splitLine: {
                show: boolean;
                lineStyle: {
                    type: string;
                };
            };
            axisLabel: {
                show: boolean;
                fontSize: number;
                color: string;
                formatter: (value: number, index: number) => string | number;
            };
            min: number;
            max: number | null;
        };
        series: {
            name: string;
            type: string;
            itemStyle: {
                color: string;
                decal: {
                    symbol: string;
                };
            };
            lineStyle: {
                color: string;
            };
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            data: number[];
        }[];
    }>;
    argeScreenAction: () => void;
    onDateAction: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * 大屏查看
     */
    argeScreen: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    xData?: unknown;
    yData?: unknown;
    analyzeType?: unknown;
    reportType?: unknown;
    chartStyle?: unknown;
    fullScreenUrl?: unknown;
} & {
    themeKey: string;
    xData: string[];
    yData: number[];
    chartStyle: Record<string, any>;
    analyzeType: AnalyzeType;
    reportType: ReportType;
} & {
    fullScreenUrl?: string | undefined;
}> & {
    onArgeScreen?: (() => any) | undefined;
}, {
    themeKey: string;
    xData: string[];
    yData: number[];
    chartStyle: Record<string, any>;
    analyzeType: AnalyzeType;
    reportType: ReportType;
}>;
export default _default;
