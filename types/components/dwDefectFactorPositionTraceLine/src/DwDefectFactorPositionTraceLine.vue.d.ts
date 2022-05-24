import { Ref, PropType } from 'vue';
import { RangeRound, ChartsGrid, DefectFactorPositionTracePieces } from '../../@types/index';
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
     * 主题色
     */
    chartTheme: {
        type: PropType<ThemeColor>;
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
     * factor title
     */
    factorTitle: {
        type: StringConstructor;
        default: string;
    };
    /**
     * factor - visualMap
     */
    factorVisualMapPieces: {
        type: PropType<DefectFactorPositionTracePieces[]>;
        default: () => {
            gt: number;
            lte: number;
            color: string;
        }[];
    };
    /**
     * Factor-y轴数据
     */
    factorYData: {
        type: PropType<number[]>;
        default: () => never[];
    };
    /**
     * Factor数据保留位数
     */
    tooltipFactorValueDecimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Factor yAxis数据保留位数
     */
    factorYAxisDecimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * position title
     */
    positionTitle: {
        type: StringConstructor;
        default: string;
    };
    /**
     * position - visualMap
     */
    positionVisualMapPieces: {
        type: PropType<DefectFactorPositionTracePieces[]>;
        default: () => ({
            gt: number;
            lte: number;
            color: string;
        } | {
            gt: number;
            color: string;
            lte?: undefined;
        })[];
    };
    /**
     * position markLine yData
     */
    positionMarkLineYData: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Position-y轴数据
     */
    positionYData: {
        type: PropType<number[]>;
        default: () => never[];
    };
    /**
     * Factor数据保留位数
     */
    tooltipPositionValueDecimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * position yAxis数据保留位数
     */
    positionYAxisDecimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * grid
     */
    grid: {
        type: PropType<ChartsGrid>;
        default: () => ChartsGrid;
    };
    /**
     * 自动设置Y轴显示范围
     */
    autoSetYRangeRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 单位
     */
    units: {
        type: PropType<string[]>;
        default: () => string[];
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
            backgroundColor: any;
            borderColor: any;
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
            borderColor: any;
            extraCssText: string;
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
            splitNumber: number;
            axisLabel: {
                show: boolean;
                fontSize: number;
                color: any;
                interval: number;
                formatter: (value: string, index: number) => string;
            };
        };
        yAxis: {
            name: string;
            type: string;
            show: boolean;
            axisLine: {
                show: boolean;
                lineStyle: {
                    color: any;
                };
            };
            axisTick: {
                show: boolean;
                inside: boolean;
                lineStyle: {
                    color: any;
                };
            };
            splitLine: {
                show: boolean;
            };
            axisLabel: {
                show: boolean;
                inside: boolean;
                fontSize: number;
                color: any;
                formatter: (value: string, index: number) => string;
            };
        }[];
        visualMap: {
            seriesIndex: number;
            showLabel: boolean;
            show: boolean;
            pieces: DefectFactorPositionTracePieces[];
        }[];
        series: ({
            name: string;
            yAxisIndex: number;
            type: string;
            lineStyle: {
                width: number;
            };
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            data: {
                value: number;
                symbol: string;
            }[];
            markLine?: undefined;
        } | {
            name: string;
            yAxisIndex: number;
            type: string;
            lineStyle: {
                width: number;
            };
            emphasis: {
                lineStyle: {
                    width: number;
                };
            };
            markLine: {
                symbol: string;
                animation: boolean;
                label: {
                    show: boolean;
                };
                lineStyle: {
                    color: any;
                    type: string;
                    width: number;
                };
                emphasis: {
                    disabled: boolean;
                    lable: {
                        show: boolean;
                    };
                    lineStyle: {
                        color: any;
                        type: string;
                        width: number;
                    };
                };
                data: {
                    yAxis: number;
                }[];
            };
            data: {
                value: number;
                symbol: string;
            }[];
        })[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    yRangeRound?: unknown;
    chartTheme?: unknown;
    xData?: unknown;
    xAxisLabel?: unknown;
    factorTitle?: unknown;
    factorVisualMapPieces?: unknown;
    factorYData?: unknown;
    tooltipFactorValueDecimalDigits?: unknown;
    factorYAxisDecimalDigits?: unknown;
    positionTitle?: unknown;
    positionVisualMapPieces?: unknown;
    positionMarkLineYData?: unknown;
    positionYData?: unknown;
    tooltipPositionValueDecimalDigits?: unknown;
    positionYAxisDecimalDigits?: unknown;
    grid?: unknown;
    autoSetYRangeRound?: unknown;
    units?: unknown;
    animation?: unknown;
} & {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
    xData: string[];
    animation: boolean;
    chartTheme: {};
    xAxisLabel: boolean;
    grid: ChartsGrid;
    factorTitle: string;
    factorVisualMapPieces: DefectFactorPositionTracePieces[];
    factorYData: number[];
    tooltipFactorValueDecimalDigits: number;
    factorYAxisDecimalDigits: number;
    positionTitle: string;
    positionVisualMapPieces: DefectFactorPositionTracePieces[];
    positionMarkLineYData: number;
    positionYData: number[];
    tooltipPositionValueDecimalDigits: number;
    positionYAxisDecimalDigits: number;
    units: string[];
} & {}>, {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
    xData: string[];
    animation: boolean;
    chartTheme: {};
    xAxisLabel: boolean;
    grid: ChartsGrid;
    factorTitle: string;
    factorVisualMapPieces: DefectFactorPositionTracePieces[];
    factorYData: number[];
    tooltipFactorValueDecimalDigits: number;
    factorYAxisDecimalDigits: number;
    positionTitle: string;
    positionVisualMapPieces: DefectFactorPositionTracePieces[];
    positionMarkLineYData: number;
    positionYData: number[];
    tooltipPositionValueDecimalDigits: number;
    positionYAxisDecimalDigits: number;
    units: string[];
}>;
export default _default;
