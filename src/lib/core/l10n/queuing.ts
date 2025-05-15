import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type QueuingDictionary = {
  queueConfirmation: {
    desc: string
    btnNavigateToMeet: string
  },
  waitingMeetDoctor: {
    title: string
    subtitle: string
  }
}

export const QueuingDictionary: MultiLingualDictionary<typeof Language> = {
  queueConfirmation: {
    desc: {
      th: "สามารถสอบถามและปรึกษา <br> อาการต่างๆของท่านได้เลย",
      en: "สามารถสอบถามและปรึกษา <br> อาการต่างๆของท่านได้เลย"
    },
    btnNavigateToMeet: {
      th: "กดเข้าห้องเพื่อปรึกษาแพทย์",
      en: "กดเข้าห้องเพื่อปรึกษาแพทย์"
    }
  },
  waitingMeetDoctor: {
    title: {
      th: "กรุณารอสักครู่ <br> คุณหมอกำลังเข้ามาให้<br> บริการท่านในอีกสักครู่ค่ะ",
      en: "กรุณารอสักครู่ <br> คุณหมอกำลังเข้ามาให้<br> บริการท่านในอีกสักครู่ค่ะ"
    },
    subtitle: {
      th: "ระบบกำลังนำทางท่านไปสู่การพบคุณหมอ <br> ท่านสามารถสอบถามและปรึกษาอาการ<br> ต่างๆ ของท่านได้เลย",
      en: "ระบบกำลังนำทางท่านไปสู่การพบคุณหมอ <br> ท่านสามารถสอบถามและปรึกษาอาการ<br> ต่างๆ ของท่านได้เลย"
    }
  }
}
