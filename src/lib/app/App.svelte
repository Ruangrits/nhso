<script lang="ts">
  import {
    MordeeAuthTokenProvider,
    type AuthProvider,
    type MordeeAuthTokenNotFound,
    type TimeoutError
  } from '@bull-shark/tdh-lib-mason/auth'
  import {page} from "$app/state"
  import GetAppStartQueryParamUseCase from "$lib/app/GetAppStartQueryParamUseCase.svelte"
  import AppStart from './AppStart.svelte'
  import GetAppStartQueryParamUseCaseDev from "$lib/app/GetAppStartQueryParamUseCaseDev.svelte"

  const TEN_SECONDS = 1000 * 10
  const FIVE_HOURS = 1000 * 60 * 60 * 5
  const ONE_HOUR = 1000 * 60 * 60

  const mordeeAuthProviderConfig = {
    requestTimeoutMilliSec: TEN_SECONDS,
    authTokenTTLMilliSec: FIVE_HOURS,
    autoRefreshCountdownMilliSec: ONE_HOUR
  }

  const mordeeAuthProvider: AuthProvider<string | MordeeAuthTokenNotFound | TimeoutError> = MordeeAuthTokenProvider(mordeeAuthProviderConfig)
</script>

<!--<GetAppStartQueryParamUseCase url={page.url}>-->
<GetAppStartQueryParamUseCaseDev url={page.url}>
    <AppStart slot="success" let:param {param} {mordeeAuthProvider}>
        <slot/>
    </AppStart>
</GetAppStartQueryParamUseCaseDev>
<!--</GetAppStartQueryParamUseCase>-->
