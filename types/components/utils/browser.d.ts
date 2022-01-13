/**
 * 获取浏览器信息
 */
declare const browserInfo: () => {
    versions: {
        /**
         * IE内核
         */
        trident: boolean;
        /**
         * opera内核
         */
        presto: boolean;
        /**
         * 苹果、谷歌内核
         */
        webKit: boolean;
        /**
         * 火狐内核
         */
        gecko: boolean;
        /**
         * 是否为移动终端
         */
        mobile: boolean;
        /**
         * ios终端
         */
        ios: boolean;
        /**
         * android终端或者uc浏览器
         */
        android: boolean;
        /**
         * 是否为iPhone或者QQHD浏览器
         */
        iPhone: boolean;
        /**
         * 是否iPad
         */
        iPad: boolean;
        /**
         * 是否web应该程序，没有头部与底部
         */
        webApp: boolean;
    };
    language: string;
};
export default browserInfo;
