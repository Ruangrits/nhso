import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export const PreScreenDictionary: MultiLingualDictionary<typeof Language> = {
  footerBtn: {
    th: "ถัดไป",
    en: "Next"
  },
  symptomSelection: {
    title: {
      th:"Do you have any of these symptoms?",
      en:"Do you have any of these symptoms?"
    },
    subTitle: {
      th:"Symptoms that can use the right to medical treatment  according to the terms of service from NHSO.",
      en:"Symptoms that can use the right to medical treatment  according to the terms of service from NHSO."
    },
    selection: {
      title: {
        th:"Select all of your symptoms.",
        en:"Select all of your symptoms."
      }
    },
    warnDialogServiceNotAvailable: {
      title: {
        th:"ขออภัย ไม่สามารถให้บริการได้",
        en:"ขออภัย ไม่สามารถให้บริการได้"
      },
      des:{
        th:"เนื่องจากสิทธิการรักษาพยาบาลอยู่นอกเงื่อนไขการให้บริการจากสปสช. หรือมีอาการเจ็บป่วยที่ควรรับการรักษา ณ สถานพยาบาล",
        en:"เนื่องจากสิทธิการรักษาพยาบาลอยู่นอกเงื่อนไขการให้บริการจากสปสช. หรือมีอาการเจ็บป่วยที่ควรรับการรักษา ณ สถานพยาบาล"
      },
      btn:{
        th:"รับทราบ",
        en:"รับทราบ"
      }
    },
    warnDialogRequiredField: {
      title: {
        th:"เลือกหน่อยค่ะ้",
        en:"เลือกหน่อยค่ะ้"
      },
      des:{
        th:"เลือกให้หนูหน่อยค่ะ",
        en:"เลือกให้หนูหน่อยค่ะ"
      },
      btn:{
        th:"เข้าใจ?",
        en:"เข้าใจ?"
      }
    }
  },
  userInfo: {
    selectionBirthDate: {
      title:{
        th:"",
        en:""
      },
      year:{
        placeholder:{
          th:"ปี",
          en:"ปี"
        }
      },
      month:{
        placeholder:{
          th:"เดือน",
          en:"เดือน"
        }
      },
      date:{
        placeholder:{
          th:"วัน",
          en:"วัน"
        }
      }
    }
  }
}
