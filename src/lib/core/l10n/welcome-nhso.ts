import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'


export type WelcomeNshoDictionary = {

    welcomeNhso: {
        title: string
        desc: string
        btn: string
    }
}

export const WelcomeNhsoDictionary : MultiLingualDictionary<typeof Language> = {

    welcomeNhso: {
        title: {
            th: "ยินดีต้อนรับสู่การใช้\nบริการสิทธิ์สปสช",
            en: "ยินดีต้อนรับสู่การใช้\nบริการสิทธิ์สปสช"
        },
        desc: {
            th: "ระบบกำลังตรวจสอบสถานะ\nของท่านกรุณารอสักครู่",
            en: "ระบบกำลังตรวจสอบสถานะ\nของท่านกรุณารอสักครู่"
        },
        btn: {
            th: "กลับสู่หน้าหลัก",
            en: "กลับสู่หน้าหลัก"
        }
    }
}
