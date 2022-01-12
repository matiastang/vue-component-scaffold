declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * 图片地址
     */
    leftTopUrl: {
        type: StringConstructor;
    };
    /**
     * leftTop图片样式
     */
    leftTopStyle: {
        type: ObjectConstructor;
        default: () => {
            height: string;
            width: string;
        };
    };
    /**
     * 图片地址
     */
    rightBottomUrl: {
        type: StringConstructor;
    };
    /**
     * rightBottom图片样式
     */
    rightBottomStyle: {
        type: ObjectConstructor;
        default: () => {
            height: string;
            width: string;
        };
    };
}, {
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        leftTopUrl: string | undefined;
        leftTopStyle: Record<string, any>;
        rightBottomUrl: string | undefined;
        rightBottomStyle: Record<string, any>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    leftTopUrl?: unknown;
    leftTopStyle?: unknown;
    rightBottomUrl?: unknown;
    rightBottomStyle?: unknown;
} & {
    leftTopStyle: Record<string, any>;
    rightBottomStyle: Record<string, any>;
} & {
    leftTopUrl?: string | undefined;
    rightBottomUrl?: string | undefined;
}>, {
    leftTopStyle: Record<string, any>;
    rightBottomStyle: Record<string, any>;
}>;
export default _sfc_main;
