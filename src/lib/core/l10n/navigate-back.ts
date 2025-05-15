import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'


export type NavigateBackNshoDictionary = {

    navigateBackNhso: {
        title: string
        desc: string
        btn: string
    }
}

export const NavigateBackNshoDictionary: MultiLingualDictionary<typeof Language> = {

    navigateBackNhso: {
        title: {
            th: "ขอบคุณสำหรับ\nการใช้บริการกับเรา",
            en: "ขอบคุณสำหรับ\nการใช้บริการกับเรา"
        },
        desc: {
            th: "ท่านสามารถกลับมาใช้สิทธิ์สปสช.\nผ่านหน้าหลักตามรูป",
            en: "ท่านสามารถกลับมาใช้สิทธิ์สปสช.\nผ่านหน้าหลักตามรูป"
        },
        btn: {
            th: "กลับสู่หน้าหลัก",
            en: "กลับสู่หน้าหลัก"
        }
    }
}
