/*
 * @Author: matiastang
 * @Date: 2021-11-12 15:14:50
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-22 16:07:39
 * @FilePath: /datumwealth-openalpha-front/src/common/request/modules/user/userInterface.d.ts
 * @Description: user 请求参数声明
 */
/**
 * 登录接口参数类型
 */
export interface LoginParameters {
    loginType: string
    username: string
    password: string
}
/**
 * 忘记密码接口参数类型
 */
export interface FotgetParameters {
    mobile: string
    verifyCode: string
    password: string
}

/**
 * 修改手机号接口参数类型
 */
export interface ChangeMobileParameters {
    id: number
    phone: string
    code: string
}

/**
 * 修改密码接口参数类型
 */
export interface ChangePasswordParameters {
    id: number
    oldPassword: string
    password: string
}

/**
 * 修改/绑定邮箱接口参数类型
 */
export interface ChangeEmailParameters {
    id: number
    email: string
    code: string
}

/**
 * 个人实名认证接口参数类型
 */
export interface PersonalParameters {
    userId: number
    email: string
    idNumber: string
    realName: string
    useScenario: string
    certMaterials: string
}

/**
 * 企业实名认证接口参数类型
 */
export interface EnterpriseParameters {
    userId: number
    company: string
    dept: string
    email: string
    legalPerson: string
    unifiedCreditCode: string
    useScenario: string
    certMaterials: string
}

/**
 * 实名认证列表
 */
export interface certificationAuth {
    applyDate: string
    certDate: string
    certMaterials: string
    certResult: string
    certStatus: number
    expireDate: string
    id: number
    useScenario: string
    userId: number
}
