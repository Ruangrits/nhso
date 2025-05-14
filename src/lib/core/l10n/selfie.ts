import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {Language} from './index'

export type SelfieDictionary = {
    guid: {
        title:string;
        desc: string;
        footerBtn:string;
    };
    scan: {
        title:string;
        preview: {
            title:string;
            footerPrimaryBtn: string;
            footerSecondaryBtn: string;
            invalidPicture: {
                title:string
                desc:string
                btn:string
            }
        };
    }
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
    },
    scan: {
        title:{
            th: "กรุณาถ่ายรูปคู่ท่านและบัตรประชาชน ให้เห็นตัวอักษร และข้อมูลบนหน้าบัตรชัดเจน",
            en: "กรุณาถ่ายรูปคู่ท่านและบัตรประชาชน ให้เห็นตัวอักษร และข้อมูลบนหน้าบัตรชัดเจน"
        },
        preview: {
            title: {
                th: "ยืนยันรูปคู่บัตรประชาชน",
                en: "ยืนยันรูปคู่บัตรประชาชน"
              },
              footerPrimaryBtn: {
                th: "ยืนยัน",
                en: "Submit"
              },
              footerSecondaryBtn: {
                th: "ถ่ายใหม่อีกครั้ง",
                en: "ถ่ายใหม่อีกครั้ง"
              },
              invalidPicture: {
                title:{
                    th: "ขออภัย กรุณาถ่ายรูปใหม่อีกครั้ง",
                    en: "ขออภัย กรุณาถ่ายรูปใหม่อีกครั้ง"
                },
                desc: {
                    th: "เนื่องจากข้อมูลจากรูปของท่าน ไม่สามารถอ่านข้อมูลได้ หรือรูปถ่ายไม่ชัดเจน กรุณาถ่ายรูปใหม่อีกครั้งค่ะ",
                    en: "เนื่องจากข้อมูลจากรูปของท่าน ไม่สามารถอ่านข้อมูลได้ หรือรูปถ่ายไม่ชัดเจน กรุณาถ่ายรูปใหม่อีกครั้งค่ะ"
                },
                btn: {
                    th: "รับทราบ",
                    en: "รับทราบ"
                }
              }
            }
    }
}
