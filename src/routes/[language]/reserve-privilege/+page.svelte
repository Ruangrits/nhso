<script lang="ts">
  import {AsyncLoading, StateChange} from '@bull-shark/tdh-lib-mason/svelte/async'
  import PrivilegeChecking from "$lib/module/reserve-privilege/view/PrivilegeChecking.svelte"
  import PrivilegeConfirmed from "$lib/module/reserve-privilege/view/PrivilegeConfirmed.svelte"
  import PrivilegeRejected from "$lib/module/reserve-privilege/view/PrivilegeRejected.svelte"

  const stateChange = StateChange.notifier()
  stateChange.pending()

  setTimeout(() => {
    stateChange.success('')
  }, 4000)

  const appContext = AppContext.get()
  const captions = appContext.translation.preScreen
</script>



<BaseBackground>
    <NavigationBack {captions} />
</BaseBackground>

<!--<AsyncLoading {stateChange} useDefaultLoading={false}>-->
<!--    <svelte:fragment slot="pending">-->
<!--        <PrivilegeChecking/>-->
<!--    </svelte:fragment>-->

<!--    <svelte:fragment slot="success">-->
<!--        <PrivilegeConfirmed/>-->
<!--    </svelte:fragment>-->

<!--    <svelte:fragment slot="failed">-->
<!--        <PrivilegeRejected/>-->
<!--    </svelte:fragment>-->
<!--</AsyncLoading>-->
