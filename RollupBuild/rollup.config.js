/*
 * @Author: matiastang
 * @Date: 2022-01-05 17:28:59
 * @LastEditors: matiastang
 * @LastEditTime: 2022-01-12 15:33:05
 * @FilePath: /dw-vue-components/RollupBuild/rollup.config.js
 * @Description:
 */
// // import vue from 'rollup-plugin-vue'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import path from 'path'
// // import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'
// import typescript from 'rollup-plugin-typescript2'
// import pkg from '../package.json'
// // const deps = Object.keys(pkg.dependencies)
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// import vue from 'rollup-plugin-vue'
// // const vue = require('rollup-plugin-vue')

// export default [
//     {
//         input: path.resolve(__dirname, '../components/index.ts'),
//         output: [
//             {
//                 format: 'es',
//                 file: pkg.module,
//             },
//         ],
//         plugins: [
//             terser(),
//             nodeResolve(),
//             // commonjs(),
//             vue({
//                 target: 'browser',
//                 css: false,
//                 exposeFilename: false,
//             }),
//             typescript({
//                 tsconfigOverride: {
//                     compilerOptions: {
//                         declaration: true,
//                     },
//                     include: ['components/**/*', 'shims-vue.d.ts'],
//                     exclude: ['node_modules', 'packages/**/__tests__/*'],
//                 },
//                 abortOnError: false,
//             }),
//         ],
//         // external(id) {
//         //     return /^vue/.test(id) || deps.some((k) => new RegExp('^' + k).test(id))
//         // },
//     },
// ]
import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/main.ts',

    plugins: [typescript(/*{ plugin options }*/)],
}
