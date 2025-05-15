import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'


export type PreScreenDictionary = {
  footerBtn: string
  symptomSelection: {
    title: string
    subTitle: string
    additionalSymptoms: {
      title: string
      placeholder: string
    }
  }
  warnDialogServiceNotAvailable: {
    title: string
    desc: string
    btn: string
  }
  warnDialogRequiredField: {
    title: string
    desc: string
    btn: string
  }
  navigateBackNhso: {
    title: string
    desc: string
    btn: string
  }
  welcomeNhso: {
    title: string
    desc: string
    btn: string
  }
  userInfo: {
    height: {
      title: string
      unit: string
    }
    weight: {
      title: string
      unit: string
    }
    disease: {
      title: string
      value: {
        yes: string
        no: string
      }
      detail: {
        placeholder: string
      }
    }
    drugAllergy: {
      title: string
      value: {
        yes: string
        no: string
      }
      detail: {
        placeholder: string
      }
    }
    selectionBirthDate: {
      title: string
      year: {
        placeholder: string
      }
      month: {
        placeholder: string
      }
      date: {
        placeholder: string
      }
    }
  }
}
export const PreScreenDictionary: MultiLingualDictionary<typeof Language> = {
  footerBtn: {
    th: "ถัดไป",
    en: "Next"
  },
  symptomSelection: {
    title: {
      th: "กรุณาระบุอาการที่ต้องการรับการปรึกษา",
      en: "กรุณาระบุอาการที่ต้องการรับการปรึกษา"
    },
    subTitle: {
      th: "อาการที่สามารถใช้สิทธิการรักษาพยาบาลตามเงื่อนไข การให้บริการจากสปสช.",
      en: "อาการที่สามารถใช้สิทธิการรักษาพยาบาลตามเงื่อนไข การให้บริการจากสปสช."
    },
    additionalSymptoms: {
      title: {
        th: "กรอกอาการเพิ่มเติม",
        en: "กรอกอาการเพิ่มเติม"
      },
      placeholder: {
        th: "โปรดระบุอาการเบื้องต้น",
        en: "โปรดระบุอาการเบื้องต้น"
      }
    },
    warnDialogServiceNotAvailable: {
      title: {
        th: "ขออภัย ไม่สามารถให้บริการได้",
        en: "ขออภัย ไม่สามารถให้บริการได้"
      },
      desc: {
        th: "เนื่องจากสิทธิการรักษาพยาบาลอยู่นอกเงื่อนไขการให้บริการจากสปสช. หรือมีอาการเจ็บป่วยที่ควรรับการรักษา ณ สถานพยาบาล",
        en: "เนื่องจากสิทธิการรักษาพยาบาลอยู่นอกเงื่อนไขการให้บริการจากสปสช. หรือมีอาการเจ็บป่วยที่ควรรับการรักษา ณ สถานพยาบาล"
      },
      btn: {
        th: "รับทราบ",
        en: "รับทราบ"
      }
    },
    warnDialogRequiredField: {
      title: {
        th: "เลือกหน่อยค่ะ้",
        en: "เลือกหน่อยค่ะ้"
      },
      desc: {
        th: "เลือกให้หนูหน่อยค่ะ",
        en: "เลือกให้หนูหน่อยค่ะ"
      },
      btn: {
        th: "เข้าใจ?",
        en: "เข้าใจ?"
      }
    }
  },
  userInfo: {
    height: {
      title: {
        th: "ส่วนสูง",
        en: "ส่วนสูง"
      },
      unit: {
        th: "ซม.",
        en: "ซม."
      }
    },
    weight: {
      title: {
        th: "น้ำหนัก",
        en: "น้ำหนัก"
      },
      unit: {
        th: "กก.",
        en: "กก."
      }
    },
    disease: {
      title: {
        th: "โรคประจำตัว",
        en: "โรคประจำตัว"
      },
      value: {
        yes: {
          th: "มี",
          en: "มี"
        },
        no: {
          th: "ไม่มี",
          en: "ไม่มี"
        }
      },
      detail: {
        placeholder: {
          th: "โปรดระบุโรคประจำตัว",
          en: "โปรดระบุโรคประจำตัว"
        }
      }
    },
    drugAllergy: {
      title: {
        th: "ประวัติการแพ้ยา",
        en: "ประวัติการแพ้ยา"
      },
      value: {
        yes: {
          th: "มี",
          en: "มี"
        },
        no: {
          th: "ไม่มี",
          en: "ไม่มี"
        }
      },
      detail: {
        placeholder: {
          th: "โปรดระบุประวัติการแพ้ยา",
          en: "โปรดระบุประวัติการแพ้ยา"
        }
      }
    },
    selectionBirthDate: {
      title: {
        th: "",
        en: ""
      },
      year: {
        placeholder: {
          th: "ปี",
          en: "ปี"
        }
      },
      month: {
        placeholder: {
          th: "เดือน",
          en: "เดือน"
        }
      },
      date: {
        placeholder: {
          th: "วัน",
          en: "วัน"
        }
      },
    }
  }

}
