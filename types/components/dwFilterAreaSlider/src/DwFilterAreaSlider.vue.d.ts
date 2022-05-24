import { ChartItem } from '../../dwFilterArea/src/interface';
declare const _default: import("vue").DefineComponent<{
    /**
     * 图谱数据
     */
    data: {
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
    /**
     * 选择范围颜色
     */
    trunc: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    startUpdate: (value: number) => void;
    endUpdate: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * 更新开始位置
     */
    'update:start': (value: number) => true;
    /**
     * 更新结束位置
     */
    'update:end': (value: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    start?: unknown;
    end?: unknown;
    bgColor?: unknown;
    rangeColor?: unknown;
    trunc?: unknown;
} & {
    data: ChartItem[];
    start: number;
    end: number;
    bgColor: string;
    rangeColor: string;
    trunc: boolean;
} & {}> & {
    "onUpdate:start"?: ((value: number) => any) | undefined;
    "onUpdate:end"?: ((value: number) => any) | undefined;
}, {
    data: ChartItem[];
    start: number;
    end: number;
    bgColor: string;
    rangeColor: string;
    trunc: boolean;
}>;
export default _default;
