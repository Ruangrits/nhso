import type {MultiLingualDictionary} from '@bull-shark/tdh-lib-mason/i18n'
import {CoreDictionary} from "./core"
import {IdCardScannerDictionary} from "./id-card-scanner"
import {PreScreenDictionary} from "./prescreen"
import { SelfieDictionary } from './selfie'
import { NavigateBackNshoDictionary } from './navigate-back'
import { WelcomeNhsoDictionary } from './welcome-nhso'

export enum Language {
  EN = 'en',
  TH = 'th'
}

export const Dictionary: MultiLingualDictionary<typeof Language> = {
  core: CoreDictionary,
  idCardScanner: IdCardScannerDictionary,
  preScreen: PreScreenDictionary,
  selfie:SelfieDictionary,
  navigateBack: NavigateBackNshoDictionary,
  welcomeNhso: WelcomeNhsoDictionary
}
