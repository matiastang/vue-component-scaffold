import { Ref } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    /**
     * placeholder提示文字
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 验证通过提示文字
     */
    confirmText: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: Readonly<{
        onDragSuccess: (() => any) | undefined;
        placeholder: string;
        confirmText: string;
    }>;
    emit: (event: "dragSuccess") => void;
    dragDivRef: Ref<HTMLElement | null>;
    dragMoveRef: Ref<HTMLElement | null>;
    beginClientLeft: Ref<number>;
    mouseMoveStatus: Ref<boolean>;
    maxwidth: Ref<number>;
    confirmWords: Ref<string>;
    confirmSuccess: Ref<boolean>;
    dragBgStyle: {
        width: string;
    };
    dragStyle: {
        left: string;
    };
    dragTextStyle: {
        color: string;
    };
    dragMousedown: (e: MouseEvent) => void;
    dragMousemove: (e: MouseEvent) => void;
    dragMoseUp: (e: MouseEvent) => void;
    dragSuccess: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * 验证通过回调
     */
    dragSuccess: () => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    placeholder?: unknown;
    confirmText?: unknown;
} & {
    placeholder: string;
    confirmText: string;
} & {}> & {
    onDragSuccess?: (() => any) | undefined;
}, {
    placeholder: string;
    confirmText: string;
}>;
export default _sfc_main;
