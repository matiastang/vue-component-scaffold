/*
 * @Author: matiastang
 * @Date: 2021-11-16 14:09:39
 * @LastEditors: matiastang
 * @LastEditTime: 2022-05-13 10:21:19
 * @FilePath: /dw-vue-components/src/api/request/axiosInterceptors.ts
 * @Description: axiosInstance | 拦截器
 */
import axios, { AxiosInstance } from 'axios'
import config from './config'
import {
    localStorageKey,
    localStorageRead,
    localStorageRemoveAll,
} from 'utils/storage/localStorage'
import ElMessage from '@/common/utils/message'
/**
 * axiosInstance
 */
let _instance: AxiosInstance | null = null
/**
 * 初始化拦截器
 */
const initInstance = () => {
    if (_instance) {
        return _instance
    }

    // 自定义实例默认值
    const axiosInstance = axios.create(config)

    // 添加请求拦截器
    axiosInstance.interceptors.request.use(
        (config) => {
            // 添加token
            const userToken = localStorageRead<string>(localStorageKey.userTokenKey)
            if (userToken && userToken.trim() !== '') {
                if (config.headers) {
                    config.headers.Authorization = `Bearer ${userToken}`
                } else {
                    config.headers = {
                        Authorization: `Bearer ${userToken}`,
                    }
                }
            }
            if (config.headers) {
                config.headers.viewType = 'front'
            } else {
                config.headers = {
                    viewType: 'front',
                }
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    // 添加响应拦截器
    axiosInstance.interceptors.response.use(
        (response) => {
            const { code, msg } = response.data
            if (code === 401) {
                localStorageRemoveAll()
                response.data.msg = '取消请求'
                setTimeout(() => {
                    ElMessage.error(msg)
                    window.location.href = import.meta.env.DEV ? '#/login' : '/login'
                }, 0)
            }
            return response
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosInstance.request

    _instance = axiosInstance
    return _instance
}

export default initInstance
