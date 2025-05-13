<script lang="ts">
  import { goto } from "$app/navigation";
  import { SELFIE_CAPTURED, SetSelfieContext } from "$lib/module/selfie/context";
  import PreviewCapturedSelfie from "$lib/module/selfie/view/PreviewCapturedSelfie.svelte";

  const {stateStore} = SetSelfieContext.get()

  const selfieCaptured: string = stateStore.getOrCreate(SELFIE_CAPTURED, () => {
    return ""
  })

  function onClickNext() {
    goto('/th/selfie/retry')
  }

  function onClickBack() {
    goto('/th/selfie/scan')
  }

</script>

<PreviewCapturedSelfie {selfieCaptured} {onClickBack} {onClickNext} />