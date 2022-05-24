import { Ref } from 'vue';
import { ChartItem } from './interface';
declare const _default: import("vue").DefineComponent<{
    /**
     * 图谱数据
     */
    chartData: {
        type: () => ChartItem[];
        default: () => {
            data: number;
            number: number;
        }[];
    };
    /**
     * 开始位置, 当小于0时表示固定最小值为0
     */
    start: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 结束位置, 当大于100时表示固定最大值为100
     */
    end: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 背景颜色
     */
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 选择范围颜色
     */
    rangeColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    areaCanvasElement: Ref<HTMLCanvasElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    chartData?: unknown;
    start?: unknown;
    end?: unknown;
    bgColor?: unknown;
    rangeColor?: unknown;
} & {
    start: number;
    chartData: ChartItem[];
    end: number;
    bgColor: string;
    rangeColor: string;
} & {}>, {
    start: number;
    chartData: ChartItem[];
    end: number;
    bgColor: string;
    rangeColor: string;
}>;
export default _default;
