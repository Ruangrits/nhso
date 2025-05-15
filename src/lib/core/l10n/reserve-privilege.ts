import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type ReservePrivilegeDictionary = {
  checking: {
    title: string
    subtitle: string
  }
  confirmed: {
    title: string
    subtitle: string
  }
  rejected: {
    title: string
    subtitle: string
  }
}

export const ReservePrivilegeDictionary: MultiLingualDictionary<typeof Language> = {
  checking: {
    title: {
      th: "ระบบกำลังทำการ ตรวจสอบสิทธิ์ของท่าน",
      en: "ระบบกำลังทำการ ตรวจสอบสิทธิ์ของท่าน"
    },
    subtitle: {
      th: "ทางระบบจะทำการจะส่งแจ้งเตือนไปยัง <br> ลูกค้าเมื่อได้ทำการเช็คสิทธิ์เรียบร้อย",
      en: "ทางระบบจะทำการจะส่งแจ้งเตือนไปยัง <br> ลูกค้าเมื่อได้ทำการเช็คสิทธิ์เรียบร้อย"
    }
  },
  confirmed: {
    title: {
      th: "สิทธิของท่านได้รับการ ยืนยันแล้ว!",
      en: "สิทธิของท่านได้รับการ ยืนยันแล้ว!"
    },
    subtitle: {
      th: "ระบบกำลังนำทางท่านไปพบคุณหมอ <br> ท่านสามารถสอบถามและปรึกษา อาการ ต่างๆ ของท่านได้เลย",
      en: "ระบบกำลังนำทางท่านไปพบคุณหมอ <br> ท่านสามารถสอบถามและปรึกษา อาการ ต่างๆ ของท่านได้เลย"
    }
  },
  rejected: {
    title: {
      th: "ขออภัย!สิทธิของท่านไม่ตรงตาม เงื่อนไขที่กำหนด",
      en: "ขออภัย!สิทธิของท่านไม่ตรงตาม เงื่อนไขที่กำหนด"
    },
    subtitle: {
      th: "กรุณาตรวจสอบสิทธิของท่านอีกครั้ง",
      en: "กรุณาตรวจสอบสิทธิของท่านอีกครั้ง"
    }
  }
}
