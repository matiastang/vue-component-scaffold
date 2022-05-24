/*
 * @Author: matiastang
 * @Date: 2022-02-09 15:30:53
 * @LastEditors: matiastang
 * @LastEditTime: 2022-04-21 16:53:27
 * @FilePath: /dw-plate-H5/src/pinia/useAuthStore.ts
 * @Description: 用户权限store
 */
import { defineStore } from 'pinia'

interface State {
    stateName: string
    publicId: string | null
    appId: string | null
    openId: string | null
    message: string | null
}

export const useAuthStore = defineStore('authorized', {
    state: (): State => ({
        stateName: 'user',
        publicId: null,
        appId: null,
        openId: null,
        message: null,
    }),
})
