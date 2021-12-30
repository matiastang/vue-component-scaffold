/*
 * @Author: matiastang
 * @Date: 2021-12-30 15:45:15
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-30 17:02:55
 * @FilePath: /dw-vue-components/index.ts
 * @Description:
 */
import { App } from 'vue'
import WechatLogin from './src/components/wechatLogin/WechatLogin.vue'
 
// 所有组件列表
const components = [ WechatLogin ]
 
// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}
 
export {
    WechatLogin
}
 
export default {
    install
}

// import WechatLogin from './src/components/wechatLogin/WechatLogin.vue'
// export { WechatLogin }

// 1. 设置打包入口

// 在项目中新建 lib.js 作为组件打包入口，假设放在根目录
// import '........../index.scss'; // 各种需要的样式文件

// // 可能需要导出vuex的modules，以便在其他项目中引入

// const components = {
//   Component1,
//   Component2,
// };

// // ops是 Vue.use时，设置的options
// const install = function(Vue, opts = {}) {
//   Object.keys(components).forEach(componentKey => {
//     const component = components[componentKey];
//     Vue.component(componentKey, component);
//   });
//   // 其他一些需要注册的内容
// };
// export default {
//   install,
//   ...components
// };

// 2.设置package.json

// "name": "lib-name", // 组件名
// "main": "./lib/lib-name.umd.js", // 组件引入时，默认导出文件
// "files": [ // 组件打包时，默认打包的文件，可以和.npmignore配合使用
//     "lib/*",
//     "README.md",
//     "package.json"
// ]
// "scripts": {
//     "lib": "vue-cli-service build --target lib --dest lib --name lib-name lib.js",
// }
// // --target lib   将项目中的任何组件以一个库的方式进行构建
// // --dest lib  指定输出目录
// // --name lib-name   打包后组件文件名
// // lib.js 打包入口文件地址
