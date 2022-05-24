import { Ref, PropType } from 'vue';
import { RangeRound, ChartsGrid } from '../../@types/index';
declare const _default: import("vue").DefineComponent<{
    /**
     * 主题（默认bright）
     * bright | bark
     */
    themeKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * y轴显示范围取整
     */
    yRangeRound: {
        type: PropType<RangeRound>;
        default: () => {
            min: boolean;
            max: boolean;
            diffPercent: number;
            decimal: number;
        };
    };
    /**
     * 自动设置Y轴显示范围
     */
    autoSetYRangeRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 主题色
     */
    chartTheme: {
        type: PropType<import("../../@types/charts").TypeOptional<import("../../@types/charts").DefectFactorThemeColor>>;
        default: () => {};
    };
    /**
     * x轴数据
     */
    xData: {
        type: PropType<string[]>;
        default: () => never[];
    };
    /**
     * 是否显示x首尾坐标
     */
    xAxisLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * y轴数据
     */
    yData: {
        type: PropType<number[]>;
        default: () => never[];
    };
    /**
     * 十字点追踪（开启后对性能有一定影响）
     */
    pointTrace: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * grid
     */
    grid: {
        type: PropType<ChartsGrid>;
        default: () => ChartsGrid;
    };
    /**
     * 开启动画
     */
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    lineChart: Ref<any>;
    echartsOption: import("vue").ComputedRef<{
        animation: boolean;
        grid: {
            show: boolean;
            left: number;
            right: number;
            top: number;
            bottom: number;
            containLabel: boolean;
            backgroundColor: string | undefined;
            borderColor: string | undefined;
        };
        tooltip: {
            show: boolean;
            trigger: string;
            axisPointer: {
                type: string;
                snap: boolean;
                label: {
                    show: boolean;
                };
            };
            padding: number;
            borderColor: string | undefined;
            extraCssText: string;
            formatter: (value: any[], index: number) => string;
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
            splitNumber: number;
            axisLabel: {
                show: boolean;
                fontSize: number;
                color: string | undefined;
                interval: number;
                formatter: (value: string, index: number) => string;
            };
        };
        yAxis: {
            show: boolean;
            axisLine: {
                show: boolean;
                lineStyle: {
                    color: string | undefined;
                };
            };
            axisTick: {
                show: boolean;
            };
            splitLine: {
                show: boolean;
            };
            axisLabel: {
                show: boolean;
                inside: boolean;
                fontSize: number;
                color: string | undefined;
                formatter: (value: string, index: number) => string;
            };
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
                        color: string | undefined;
                    }[];
                    global: boolean;
                };
            };
            emphasis: {
                disabled: boolean;
                lineStyle: {
                    width: number;
                };
            };
            showAllSymbol: boolean;
            triggerLineEvent: boolean;
            markLine: {
                symbol: string;
                animation: boolean;
                label: {
                    show: boolean;
                };
                lineStyle: {
                    color: string | undefined;
                    type: string;
                    width: number;
                };
                emphasis: {
                    disabled: boolean;
                    lable: {
                        show: boolean;
                    };
                    lineStyle: {
                        color: string | undefined;
                        type: string;
                        width: number;
                    };
                };
                data: ({
                    yAxis: number;
                } | {
                    xAxis: string;
                })[];
            };
            data: {
                value: number;
                symbol: string;
            }[];
        }[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    yRangeRound?: unknown;
    autoSetYRangeRound?: unknown;
    chartTheme?: unknown;
    xData?: unknown;
    xAxisLabel?: unknown;
    yData?: unknown;
    pointTrace?: unknown;
    grid?: unknown;
    animation?: unknown;
} & {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
    xData: string[];
    yData: number[];
    animation: boolean;
    pointTrace: boolean;
    chartTheme: import("../../@types/charts").TypeOptional<import("../../@types/charts").DefectFactorThemeColor>;
    xAxisLabel: boolean;
    grid: ChartsGrid;
} & {}>, {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
    xData: string[];
    yData: number[];
    animation: boolean;
    pointTrace: boolean;
    chartTheme: import("../../@types/charts").TypeOptional<import("../../@types/charts").DefectFactorThemeColor>;
    xAxisLabel: boolean;
    grid: ChartsGrid;
}>;
export default _default;
