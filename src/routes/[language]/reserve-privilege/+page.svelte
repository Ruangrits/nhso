<script lang="ts">
  import {AsyncLoading, StateChange} from '@bull-shark/tdh-lib-mason/svelte/async'
  import PrivilegeChecking from "$lib/module/reserve-privilege/view/PrivilegeChecking.svelte"
  import PrivilegeConfirmed from "$lib/module/reserve-privilege/view/PrivilegeConfirmed.svelte"
  import PrivilegeRejected from "$lib/module/reserve-privilege/view/PrivilegeRejected.svelte"
  import {AppContext} from "$lib/app/app-context"
  import {goto} from "$app/navigation"

  const appContext = AppContext.get()
  const captions = appContext.translation.reservePrivilege
  const navCtrl = appContext.navCtrl

  const stateChange = StateChange.notifier()
  stateChange.pending()

  setTimeout(() => {
    stateChange.success('')
    setTimeout(() => {
      goto(navCtrl.page().queuing.landing)
    }, 1000)
  }, 4000)
</script>

<AsyncLoading {stateChange} useDefaultLoading={false}>
    <svelte:fragment slot="pending">
        <PrivilegeChecking {captions}/>
    </svelte:fragment>

    <svelte:fragment slot="success">
        <PrivilegeConfirmed {captions}/>
    </svelte:fragment>

    <svelte:fragment slot="failed">
        <PrivilegeRejected {captions}/>
    </svelte:fragment>
</AsyncLoading>
