import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type QueuingDictionary = {
  queueConfirmation: {
    desc: string
    btnNavigateToMeet: string
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
  }
}
