import {getContext, setContext} from "svelte"
import type {Language} from "$lib/core/l10n"
import type {LocalizationBundle} from "$lib/core/l10n/generated"
import type {
  AuthProvider,
  MordeeAuthTokenNotFound,
  TimeoutError
} from '@bull-shark/tdh-lib-mason/auth'
import type {NavCtrl} from "$lib/app/nav-ctrl"

const APP_CONTEXT_KEY = 'APP.APP_CONTEXT'

export const AppContext = {
  set: (context: AppContext): AppContext => {
    return setContext(APP_CONTEXT_KEY, context)
  },
  get: (): AppContext => {
    return getContext(APP_CONTEXT_KEY)
  }
}

export type AppContext = {
  mordeeAuthProvider: AuthProvider<string | MordeeAuthTokenNotFound | TimeoutError>
  readonly appLanguage: Language
  readonly platform: Platform
  readonly translation: (typeof LocalizationBundle)[Language]
  readonly navCtrl: NavCtrl
  readonly baseUrl: BaseUrl
  readonly biz: AppBizContext
}

export type BaseUrl = {}


export enum Platform {
  Android = 'Android-mobile',
  iOS = 'iOS-mobile',
  Unknown = 'unknown'
}

export type AppBizContext = {
  channelId: number
  tenantId: number
  bu: number
  bc: number
}
