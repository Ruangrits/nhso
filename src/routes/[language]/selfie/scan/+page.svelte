<script lang="ts">
  import { goto } from "$app/navigation";
  import { AppContext } from "$lib/app/app-context";
  import { StateStore } from "$lib/core/state-store";
  import { SELFIE_CAPTURED, SetSelfieContext } from "$lib/module/selfie/context";
  import SelfieCapturer from "$lib/module/selfie/view/SelfieCapturer.svelte";


  const appContext = AppContext.get()
  const captions = appContext.translation.selfie

  function onClickNext() {
    goto('/th/selfie/scan/preview')
  }

  function onSnapShot(selfieCaptured: string) {
    StateStore.create(SELFIE_CAPTURED, selfieCaptured)
  }

</script>

<SelfieCapturer {onClickNext} {onSnapShot} {captions}/>
