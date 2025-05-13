import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type SelfieDictionary = {
    guid: {
        title:string;
        desc: string;
    };
}

export const SelfieDictionary: MultiLingualDictionary<typeof Language> = {
    guid: {
        title:{
            th: "การถ่ายรูปคู่บัตรประชาชน",
            en: "การถ่ายรูปคู่บัตรประชาชน"
        },
        desc: {
            en: " <ul>\n        <li>  • บัตรต้องไม่บังใบหน้าส่วนใดส่วนหนึ่ง </li>\n      <br>\n      <li>  • ถอดแว่น ถอดแมสก่อนถ่าย </li><br>\n      <li>  • รูปต้องชัดเจนให้เห็นตัวอักษรบนบัตร</li><br>\n    </ul>",
            th: " <ul>\n        <li>  • บัตรต้องไม่บังใบหน้าส่วนใดส่วนหนึ่ง </li>\n      <br>\n      <li>  • ถอดแว่น ถอดแมสก่อนถ่าย </li><br>\n      <li>  • รูปต้องชัดเจนให้เห็นตัวอักษรบนบัตร</li><br>\n    </ul>"
          },
        footerBtn: {
            th: "ถัดไป",
            en: "Next"
        }
    }
}
