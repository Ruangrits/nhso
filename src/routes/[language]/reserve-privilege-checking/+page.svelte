<script lang="ts">
  import {AsyncLoading, StateChange} from '@bull-shark/tdh-lib-mason/svelte/async'
  import PrivilegeChecking from "$lib/module/reserve-privilege-checking/view/PrivilegeChecking.svelte"
  import PrivilegeConfirmed from "$lib/module/reserve-privilege-checking/view/PrivilegeConfirmed.svelte"
  import PrivilegeRejected from "$lib/module/reserve-privilege-checking/view/PrivilegeRejected.svelte"

  const stateChange = StateChange.notifier()
  stateChange.pending()

  setTimeout(() => {
    stateChange.success('')
  }, 4000)
</script>

<AsyncLoading {stateChange} useDefaultLoading={false}>
    <svelte:fragment slot="pending">
        <PrivilegeChecking/>
    </svelte:fragment>

    <svelte:fragment slot="success">
        <PrivilegeConfirmed/>
    </svelte:fragment>

    <svelte:fragment slot="failed">
        <PrivilegeRejected/>
    </svelte:fragment>
</AsyncLoading>
