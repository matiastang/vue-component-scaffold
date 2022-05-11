/*
 * @Author: matiastang
 * @Date: 2021-12-28 19:31:46
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-11 18:39:37
 * @FilePath: /dw-vue-components/src/router/index.ts
 * @Description: 路由
 */
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
// layout
import Layout from '@/components/layout/Layout.vue'
// web
import Home from '@/views/home/Home.vue'
// test
import DwStocksAnalysisLineTest from '@/views/test/DwStocksAnalysisLineTest.vue'
import DwFilterSliderTest from '@/views/test/DwFilterSliderTest.vue'
import DwFilterAreaTest from '@/views/test/DwFilterAreaTest.vue'
import DwPortfolioTest from '@/views/test/DwPortfolioTest.vue'
import DwEchartsTest from '@/views/test/DwEchartsTest.vue'
import DwDefectChartsTest from '@/views/test/DwDefectChartsTest.vue'
// NotFound
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    //     beforeEnter: (to, from) => {
    //         console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
    //         return true
    //     },
    // },
    // {
    //     path: '/dwStocksAnalysisLine',
    //     name: 'dwStocksAnalysisLine',
    //     component: DwStocksAnalysisLineTest,
    //     beforeEnter: (to, from) => {
    //         console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
    //         return true
    //     },
    // },
    // {
    //     path: '/dwFilterSlider',
    //     name: 'dwFilterSlider',
    //     component: DwFilterSliderTest,
    //     beforeEnter: (to, from) => {
    //         console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
    //         return true
    //     },
    // },
    // {
    //     path: '/dwFilterArea',
    //     name: 'dwFilterArea',
    //     component: DwFilterAreaTest,
    //     beforeEnter: (to, from) => {
    //         console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
    //         return true
    //     },
    // },
    // // {
    // //     path: '/dwPortfolioTest',
    // //     name: 'dwPortfolioTest',
    // //     component: DwPortfolioTest,
    // //     beforeEnter: (to, from) => {
    // //         console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
    // //         return true
    // //     },
    // // },
    {
        path: '/dwEchartsTest',
        name: 'dwEchartsTest',
        component: DwEchartsTest,
        beforeEnter: (to, from) => {
            console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
            return true
        },
    },
    {
        path: '/dwDefectChartsTest',
        name: 'dwDefectChartsTest',
        component: DwDefectChartsTest,
        beforeEnter: (to, from) => {
            console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
            return true
        },
    },
    {
        path: '/:pathMatch(.*)*', // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
        name: 'NotFound',
        redirect: '/',
        component: NotFound,
    },
]
/**
 * 创建Router
 */
const router = createRouter({
    // history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory(),
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 平滑滚动
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return { x: 0, y: 0 }
    },
})

/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
    // TODO: - 登录校验
    // import { localStorageKey, localStorageRead } from 'utils/storage/localStorage'
    // import { DwPortfolioTest } from '@/views/test/DwPortfolioTest.vue';
    // import DwEcharts from '../../components/dwEcharts/index';
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        //     //     // 用户token
        //     //     const userToken = localStorageRead<string>(localStorageKey.userTokenKey)
        //     //     if (!userToken || userToken.trim() === '') {
        //     //         // 未登录
        //     //         next({
        //     //             path: '/login',
        //     //             replace: true,
        //     //         })
        //     //         return
        //     //     }
        //     // }
        //     next()
        // }
    }
    next()
})

/**
 * 全局解析守卫
 */
router.beforeResolve((to) => {
    console.log(`将要跳转到${to.path}`)
})

/**
 * 全局后置钩子
 */
router.beforeEach((to, from) => {
    console.log(`从${from.path}跳转到${to.path}`)
})

export default router
