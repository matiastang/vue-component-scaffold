import { PieBondStockData } from '../../dwPortfolioTypes';
declare const _default: import("vue").DefineComponent<{
    /**
     * 标题
     */
    title: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 主题
     */
    themeKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 图谱数据
     */
    data: {
        type: () => PieBondStockData[];
        default: () => {
            value: number;
            name: string;
        }[];
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
     * 饼图中心位置到左侧的距离，占整个空间的百分比
     */
    pieLeft: {
        type: NumberConstructor;
        default: number;
    };
}, {
    echartsOption: import("vue").ComputedRef<{
        legend: {
            show: boolean;
            orient: string;
            height: string;
            top: string;
            left: string;
            icon: string;
            itemWidth: number;
            itemHeight: number;
            selectedMode: boolean;
            formatter: (name: string) => string;
        };
        series: {
            name: string;
            type: string;
            radius: string | (string | number)[];
            center: string[];
            colorBy: string;
            data: PieBondStockData[];
            itemStyle: {
                color: (params: any) => string;
            };
            emphasis: {
                itemStyle: {
                    shadowBlur: number;
                    shadowOffsetX: number;
                    shadowColor: string;
                };
            };
            label: {
                show: boolean;
            };
        }[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    themeKey?: unknown;
    data?: unknown;
    chartStyle?: unknown;
    pieLeft?: unknown;
} & {
    data: PieBondStockData[];
    themeKey: string;
    chartStyle: Record<string, any>;
    title: string;
    pieLeft: number;
} & {}>, {
    data: PieBondStockData[];
    themeKey: string;
    chartStyle: Record<string, any>;
    title: string;
    pieLeft: number;
}>;
export default _default;
