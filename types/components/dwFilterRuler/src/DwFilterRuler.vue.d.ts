declare const _default: import("vue").DefineComponent<{
    /**
     * 范围（默认0%-100%）
     */
    range: {
        type: () => string[];
        default: () => string[];
    };
    /**
     * 颜色
     */
    rulerColor: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    range?: unknown;
    rulerColor?: unknown;
} & {
    range: string[];
    rulerColor: string;
} & {}>, {
    range: string[];
    rulerColor: string;
}>;
export default _default;
