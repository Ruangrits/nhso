<script lang="ts">
  import {AsyncLoading, StateChange} from '@bull-shark/tdh-lib-mason/svelte/async'
  import {AppContext} from "$lib/app/app-context"
  import WaitingMeetDoctor from "$lib/module/queuing/view/WaitingMeetDoctor.svelte"
  import QueueConfirmation from "$lib/module/queuing/view/QueueConfirmation.svelte"

  const appContext = AppContext.get()
  const captions = appContext.translation.queuing
  const navCtrl = appContext.navCtrl


  const stateChange = StateChange.notifier()

  stateChange.pending()

  setTimeout(() => {
    stateChange.success('')
  }, 4000)

</script>

<AsyncLoading {stateChange} useDefaultLoading={false}>
    <svelte:fragment slot="pending">
        <WaitingMeetDoctor/>
    </svelte:fragment>

    <svelte:fragment slot="success">
        <QueueConfirmation {captions}/>
    </svelte:fragment>
</AsyncLoading>

