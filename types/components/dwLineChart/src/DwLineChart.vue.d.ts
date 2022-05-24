import { Ref, PropType } from 'vue';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { RangeRound } from '../../@types/index';
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
     * echarts配置
     */
    echartsOption: {
        type: PropType<ECBasicOption>;
    };
    /**
     * 自动设置Y轴显示范围
     */
    autoSetYRangeRound: {
        type: BooleanConstructor;
        default: boolean;
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
}, {
    lineChart: Ref<any>;
    chartOption: import("vue").ComputedRef<ECBasicOption | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    themeKey?: unknown;
    echartsOption?: unknown;
    autoSetYRangeRound?: unknown;
    yRangeRound?: unknown;
} & {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
} & {
    echartsOption?: ECBasicOption | undefined;
}>, {
    themeKey: string;
    autoSetYRangeRound: boolean;
    yRangeRound: RangeRound;
}>;
export default _default;
