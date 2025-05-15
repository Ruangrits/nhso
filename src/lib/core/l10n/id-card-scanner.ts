import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type IdCardScannerDictionary = {
  guid: {
    title: string;
    desc: string;
    footerBtn:string;
  };
  scan: {
    title: string;
    preview: {
      title: string;
      footerPrimaryBtn: string;
      footerSecondaryBtn: string;
    };
  };
  form: {
    title: string;
    inputFieldCitizen: {
      label: string;
    };
    inputFieldName: {
      label: string;
    };
    inputFieldSurname: {
      label: string;
    };
    footerBtn: string;
  };
}


export const IdCardScannerDictionary: MultiLingualDictionary<typeof Language> = {
  guid: {
    title: {
      th: "ขั้นตอนการสแกนบัตรประชาชน",
      en: "ขั้นตอนกา  รสแกนบัตรประชาชน"
    },
    desc: {
      th: "<ul>\n    <br>\n      <li>  •  หามุมหารถ่ายที่มีแสงสว่างเพียงพอ โดยที่จะเห็นข้อมูลบัตร </li>\n      <br>\n      <li>  • โปรดระวังนิ้วหรือสิ่งของที่อาจบัง ข้อมูลบนบัตรประชาชนของคุณ </li><br>\n      <li>  • แสงสะท้อนของบัตรอาจะทำให้การ ตรวจสอบข้อมูลทำได้ยากขึ้น</li><br>\n  </ul>",
      en: "<ul>\n    <br>\n      <li>  •  หามุมหารถ่ายที่มีแสงสว่างเพียงพอ โดยที่จะเห็นข้อมูลบัตร </li>\n      <br>\n      <li>  • โปรดระวังนิ้วหรือสิ่งของที่อาจบัง ข้อมูลบนบัตรประชาชนของคุณ </li><br>\n      <li>  • แสงสะท้อนของบัตรอาจะทำให้การ ตรวจสอบข้อมูลทำได้ยากขึ้น</li><br>\n  </ul>",
    },
    footerBtn: {
      th: "ถัดไป",
      en: "Next"
    }
  },
  scan: {
    title: {
      th: "กรุณาวางบัตรให้อยู่ในกรอบที่กำหนด ให้เห็นตัวอักษร และข้อมูลบนหน้าบัตรชัดเจน",
      en: "กรุณาวางบัตรให้อยู่ในกรอบที่กำหนด ให้เห็นตัวอักษร และข้อมูลบนหน้าบัตรชัดเจน",
    },
    preview: {
      title: {
        th: "สแกนบัตรประชาชน",
        en: "สแกนบัตรประชาชน"
      },
      footerPrimaryBtn: {
        th: "ยืนยัน",
        en: "Submit"
      },
      footerSecondaryBtn: {
        th: "ถ่ายใหม่อีกครั้ง",
        en: "ถ่ายใหม่อีกครั้ง"
      }
    }
  },
  form: {
    title: {
      th: "ขั้นตอนการสแกนบัตรประชาชน",
      en: "ขั้นตอนการสแกนบัตรประชาชน"
    },
    inputFieldCitizen: {
      label: {
        th: "เลขบัตรประชาชน",
        en: "เลขบัตรประชาชน"
      }
    },
    inputFieldName: {
      label: {
        th: "ชื่อ",
        en: "ชื่อ"
      }
    },
    inputFieldSurname: {
      label: {
        th: "นามสกุล",
        en: "นามสกุล"
      }
    },
    footerBtn: {
      th: "ถัดไป",
      en: "Next"
    }
  }
}
