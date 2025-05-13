<script lang="ts">
  import { goto } from "$app/navigation";
  import { StateStore } from "$lib/core/state-store";
  import { SELFIE_CAPTURED, SetSelfieContext } from "$lib/module/selfie/context";
  import SelfieCapturer from "$lib/module/selfie/view/SelfieCapturer.svelte";



  function onClickNext() {
    goto('/th/selfie/scan/preview')
  }

  function onSnapShot(selfieCaptured: string) {
    StateStore.create(SELFIE_CAPTURED, selfieCaptured)
  }

</script>

<SelfieCapturer {onClickNext} {onSnapShot}/>
