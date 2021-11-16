/*
 * @Author: matiastang
 * @Date: 2021-11-11 18:24:38
 * @LastEditors: matiastang
 * @LastEditTime: 2021-11-16 10:18:47
 * @FilePath: /datumwealth-openalpha-front/src/common/request/modules/user.ts
 * @Description: 用户相关接口
 */
import http from '../request'
import { Md5 } from 'ts-md5/dist/md5'
import {
    LoginParameters,
    FotgetParameters,
    ChangeMobileParameters,
    ChangePasswordParameters,
    ChangeEmailParameters,
} from './userInterface'
// import { UserLoginInfo } from '@/user'
// import { localStorageKey, localStorageWrite } from '@/common/utils/storage/localStorage'

/**
 * 用户登录/注册
 * @param loginType 登录类型：pwd-密码登录 code-验证码登录
 * @param username 账号：手机号/用户名
 * @param password 密码：验证码/密码
 * @returns
 */
function login(parameters: LoginParameters) {
    return http.post('/member/login', {
        loginType: parameters.loginType,
        username: parameters.username,
        password:
            parameters.loginType === 'pwd' ? Md5.hashStr(parameters.password) : parameters.password,
    })
}

/**
 * 短信验证码发送
 * @param mobile
 * @returns
 */
function sendSMS(mobile: string) {
    return new Promise<string>((resolve, reject) => {
        http.get(`/member/send/sms/${mobile}`)
            .then((res) => {
                const data = res.data
                resolve(typeof data === 'string' ? data : '发送成功')
            })
            .catch(reject)
    })
}

/**
 * 忘记密码/找回密码
 * @param mobile 手机号
 * @param verifyCode 验证码
 * @param password 密码
 * @returns
 */
function forget(parameters: FotgetParameters) {
    return new Promise<string>((resolve, reject) => {
        http.post('/member/forget', {
            mobile: parameters.mobile,
            verifyCode: parameters.verifyCode,
            password: Md5.hashStr(parameters.password),
        })
            .then((res) => {
                const data = res.data
                resolve(typeof data === 'string' ? data : '重置成功')
            })
            .catch(reject)
    })
}

/**
 * 绑定/修改手机号
 * @param parameters
 * @returns
 */
function changeMobile(parameters: ChangeMobileParameters) {
    return new Promise<string>((resolve, reject) => {
        http.post('/member/change/mobile', parameters)
            .then((res) => {
                const data = res.data
                resolve(typeof data === 'string' ? data : '修改成功')
            })
            .catch(reject)
    })
}

/**
 * 绑定/修改手机号
 * @param parameters
 * @returns
 */
function changePassword(parameters: ChangePasswordParameters) {
    return new Promise<string>((resolve, reject) => {
        http.post('/member/change/password', parameters)
            .then((res) => {
                const data = res.data
                resolve(typeof data === 'string' ? data : '修改成功')
            })
            .catch(reject)
    })
}

/**
 * 绑定/修改邮箱
 * @param parameters
 * @returns
 */
function changeEmail(parameters: ChangeEmailParameters) {
    return new Promise<string>((resolve, reject) => {
        http.post('/member/change/email', parameters)
            .then((res) => {
                const data = res.data
                resolve(typeof data === 'string' ? data : '修改成功')
            })
            .catch(reject)
    })
}

export { login, sendSMS, forget, changeMobile, changePassword, changeEmail }