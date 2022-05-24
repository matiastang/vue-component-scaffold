import { Ref } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * 开始位置, 当小于0时表示固定最小值为0
     */
    startValue: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 结束位置, 当大于100时表示固定最大值为100
     */
    endValue: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 开始位置与结束位置最小间隔
     */
    minDiff: {
        type: NumberConstructor;
        default: number;
    };
}, {
    sliderTrackElement: Ref<HTMLElement | null>;
    leftWidth: import("vue").ComputedRef<number>;
    greaterElement: Ref<HTMLElement | null>;
    greaterLeft: import("vue").ComputedRef<number>;
    greaterHidden: import("vue").ComputedRef<boolean>;
    greaterTouchStart: (e: TouchEvent) => void;
    greaterTouchEnd: () => void;
    greaterTouchMove: (e: TouchEvent) => void;
    lessElement: Ref<HTMLElement | null>;
    lessLeft: import("vue").ComputedRef<number>;
    lessHidden: import("vue").ComputedRef<boolean>;
    lessTouchStart: (e: TouchEvent) => void;
    lessTouchEnd: () => void;
    lessTouchMove: (e: TouchEvent) => void;
    rightWidth: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * 更新开始位置
     */
    'update:startValue': (value: number) => true;
    /**
     * 更新结束位置
     */
    'update:endValue': (value: number) => true;
    /**
     * 更新结束位置
     */
    minDiffWarn: (start: number, end: number, diff: number) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    startValue?: unknown;
    endValue?: unknown;
    minDiff?: unknown;
} & {
    startValue: number;
    endValue: number;
    minDiff: number;
} & {}> & {
    "onUpdate:startValue"?: ((value: number) => any) | undefined;
    "onUpdate:endValue"?: ((value: number) => any) | undefined;
    onMinDiffWarn?: ((start: number, end: number, diff: number) => any) | undefined;
}, {
    startValue: number;
    endValue: number;
    minDiff: number;
}>;
export default _default;
