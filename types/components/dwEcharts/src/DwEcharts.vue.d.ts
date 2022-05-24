import { Ref, PropType } from 'vue';
import { ECBasicOption } from 'echarts/types/dist/shared';
declare const _default: import("vue").DefineComponent<{
    /**
     * 主题（默认bright）
     * bright | bark
     */
    themeKey: {
        type: StringConstructor;
        default: string;
    };
    echartsOption: {
        type: PropType<ECBasicOption>;
    };
}, {
    chart: Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    echartsOption?: unknown;
} & {
    themeKey: string;
} & {
    echartsOption?: ECBasicOption | undefined;
}>, {
    themeKey: string;
}>;
/**
 * Error: Renderer 'undefined' is not imported. Please import it first
 * zRander的registerPainter未初始化,需要在main.ts中添加use()引用
 */
export default _default;
