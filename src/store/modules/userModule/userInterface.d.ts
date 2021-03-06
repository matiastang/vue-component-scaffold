/*
 * @Author: matiastang
 * @Date: 2021-11-12 14:21:45
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-29 11:19:55
 * @FilePath: /datumwealth-front-scaffold/src/store/modules/userModule/userInterface.d.ts
 * @Description: UserModule 类型申明
 */
import { UserLoginInfo } from '@/@types/user'
/**
 * UserModule 类型
 */
export interface UserModuleTypes {
    name: string
    userLoginInfo: UserLoginInfo
    wechatState: string | null
}
PersonalParameters
/**
 * 个人实名认证接口参数类型
 */
export interface PersonalInfoTypes {
    email: string
    idNumber: string
    realName: string
    useScenario: string
}

/**
 * 企业实名认证接口参数类型
 */
export interface EnterpriseInfoTypes {
    company: string
    dept: string
    email: string
    legalPerson: string
    unifiedCreditCode: string
    useScenario: string
}
