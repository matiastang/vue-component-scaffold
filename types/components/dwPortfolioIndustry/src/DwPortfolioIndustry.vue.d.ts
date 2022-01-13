import { IndustryBondStockData, IndustryMainData } from '../../dwPortfolioTypes';
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
        type: () => (IndustryBondStockData | IndustryMainData)[];
        default: () => {
            tradeDt: string;
            bondWeight: number;
            stockWeight: number;
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
}, {
    echartsOption: import("vue").ComputedRef<{
        color: string[];
        grid: {
            left: number;
            right: number;
            top: number;
            bottom: number;
            containLabel: boolean;
        };
        tooltip: {
            show: boolean;
            trigger: string;
            formatter: (values: any, index: number) => "" | "数据格式错误";
        };
        legend: {
            show: boolean;
            orient: string;
            y: string;
            x: string;
            icon: string;
            itemWidth: number;
            itemHeight: number;
            selectedMode: boolean;
        };
        xAxis: {
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
            };
        };
        yAxis: {
            show: boolean;
            min: number;
            max: number;
            axisLabel: {
                show: boolean;
                inside: boolean;
                fontSize: number;
                color: string;
                formatter: (value: number, index: number) => string;
            };
        };
        series: {
            name: string;
            type: string;
            stack: string;
            lineStyle: {
                width: number;
            };
            areaStyle: {
                opacity: number;
            };
            smooth: boolean;
            emphasis: {
                focus: string;
            };
            blur: {};
            data: {
                value: number;
                symbol: string;
            }[];
        }[];
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    tooltipAction: (values: any) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    themeKey?: unknown;
    data?: unknown;
    chartStyle?: unknown;
} & {
    data: (IndustryBondStockData | IndustryMainData)[];
    themeKey: string;
    chartStyle: Record<string, any>;
    title: string;
} & {}> & {
    onTooltipAction?: ((values: any) => any) | undefined;
}, {
    data: (IndustryBondStockData | IndustryMainData)[];
    themeKey: string;
    chartStyle: Record<string, any>;
    title: string;
}>;
export default _default;
