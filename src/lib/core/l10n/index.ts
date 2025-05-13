import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {CoreDictionary} from "./core"
import {IdCardScannerDictionary} from "./id-card-scanner"
import {PreScreenDictionary} from "./prescreen"
import { SelfieDictionary } from './selfie'

export enum Language {
  EN = 'en',
  TH = 'th'
}

export const Dictionary: MultiLingualDictionary<typeof Language> = {
  core: CoreDictionary,
  idCardScanner: IdCardScannerDictionary,
  preScreen: PreScreenDictionary,
  selfie:SelfieDictionary
}
