<script lang="ts">
  import {AsyncLoading, StateChange} from '@bull-shark/tdh-lib-mason/svelte/async'
  import PrivilegeChecking from "$lib/module/reserve-privilege-checking/view/PrivilegeChecking.svelte"
  import PrivilegeConfirmed from "$lib/module/reserve-privilege-checking/view/PrivilegeConfirmed.svelte"
  import PrivilegeRejected from "$lib/module/reserve-privilege-checking/view/PrivilegeRejected.svelte"
  import BaseBackground from "$lib/module/common/BaseBackground.svelte";
  import NavigationBack from "$lib/module/common/navigation-back/NavigationBack.svelte";
  import {AppContext} from "$lib/app/app-context";

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
