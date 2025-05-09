<script lang="ts">
  import type {AuthProvider, MordeeAuthTokenNotFound, TimeoutError} from '@bull-shark/tdh-lib-mason/auth'
  import {type AppBizContext, AppContext} from "$lib/app/app-context"
  import {page} from "$app/state"
  import type {Language} from "$lib/core/l10n"
  import {
    PUBLIC_MORDEE_NHSO_CHANNEL_ID, PUBLIC_MORDEE_NHSO_BU, PUBLIC_MORDEE_NHSO_BC, PUBLIC_MORDEE_NHSO_TENANT
  } from "$env/static/public"
  import {DefaultNavCtrl} from "$lib/app/nav-ctrl"
  import {LocalizationBundle} from "$lib/core/l10n/generated"
  import type {AppStartQueryParams} from "$lib/app/GetAppStartQueryParamUseCase.svelte"

  export let param: AppStartQueryParams
  export let mordeeAuthProvider: AuthProvider<string | MordeeAuthTokenNotFound | TimeoutError>
  const language: Language = page.params.language as Language

  const biz: AppBizContext = {
    channelId: Number(PUBLIC_MORDEE_NHSO_CHANNEL_ID),
    tenantId: Number(PUBLIC_MORDEE_NHSO_TENANT),
    bu: Number(PUBLIC_MORDEE_NHSO_BU),
    bc: Number(PUBLIC_MORDEE_NHSO_BC),
  }

  AppContext.set({
    mordeeAuthProvider,
    appLanguage: language,
    baseUrl: {},
    navCtrl: new DefaultNavCtrl({
      language: language,
      platform: param.platform,
      biz
    }),
    platform: param.platform,
    translation: LocalizationBundle[language],
    biz
  })
</script>

<slot/>
