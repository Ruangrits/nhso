<script lang="ts">
  import { goto } from "$app/navigation";
  import { AppContext } from "$lib/app/app-context";
  import { StateStore } from "$lib/core/state-store";
  import { SELFIE_CAPTURED, SetSelfieContext } from "$lib/module/selfie/context";
  import PreviewCapturedSelfie from "$lib/module/selfie/view/PreviewCapturedSelfie.svelte";

  const selfieCaptured: string = StateStore.getOrCreate(SELFIE_CAPTURED, () => {
    return ""
  })

  const appContext = AppContext.get()
  const captions = appContext.translation.selfie


  function onClickBack() {
    goto('/th/selfie/scan')
  }

</script>

<PreviewCapturedSelfie {selfieCaptured} {onClickBack} {captions} />