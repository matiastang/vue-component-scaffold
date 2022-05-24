declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 百分比
     */
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 角速度
     */
    angularSpeed: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 起始颜色
     */
    startColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 结束颜色
     */
    endColor: {
        type: StringConstructor;
        default: string;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    id?: unknown;
    percentage?: unknown;
    angularSpeed?: unknown;
    startColor?: unknown;
    endColor?: unknown;
} & {
    id: string;
    percentage: number;
    angularSpeed: number;
    startColor: string;
    endColor: string;
} & {}>, {
    id: string;
    percentage: number;
    angularSpeed: number;
    startColor: string;
    endColor: string;
}>;
export default _default;
