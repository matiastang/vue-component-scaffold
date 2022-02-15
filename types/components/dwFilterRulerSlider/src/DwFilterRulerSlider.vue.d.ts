declare const _default: import("vue").DefineComponent<{
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
    start?: unknown;
    end?: unknown;
    trunc?: unknown;
} & {
    start: number;
    end: number;
    trunc: boolean;
} & {}> & {
    "onUpdate:start"?: ((value: number) => any) | undefined;
    "onUpdate:end"?: ((value: number) => any) | undefined;
}, {
    start: number;
    end: number;
    trunc: boolean;
}>;
export default _default;
