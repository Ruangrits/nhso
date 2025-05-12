export type Symptoms = {
  label: string
  value: string
  type: SymptomsType
}

export enum SymptomsType {
  Normal,
  ButtonReverse
}

export const symptoms: Array<Symptoms> = [
  {label: "เป็นไข้", value: "fever", type: SymptomsType.Normal},
  {label: "ไอ เจ็บคอ", value: "cough_sore_throat", type: SymptomsType.Normal},
  {label: "คลื่นไส้ อาเจียน", value: "nausea_vomiting", type: SymptomsType.Normal},
  {label: "ปวดท้อง แน่นท้อง", value: "stomach_pain_bloating", type: SymptomsType.Normal},
  {label: "ปวดหัว", value: "headache", type: SymptomsType.Normal},
  {label: "อื่นๆ", value: "other", type: SymptomsType.ButtonReverse},
]
