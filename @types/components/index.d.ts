import { App } from 'vue';
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue';
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue';
declare const install: (app: App) => void;
export { DwWechatLogin, DwDragVerify };
export default install;
