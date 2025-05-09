<script lang="ts">
  import {IMAGE_SCANNED, SetIdCardScannerContext} from "$lib/module/id-card-scanner/context"
  import PreviewScanImage from "$lib/module/id-card-scanner/view/PreviewScanImage.svelte"
  import {goto} from "$app/navigation"

  const {stateStore} = SetIdCardScannerContext.get()

  const imageScanned: string = stateStore.getOrCreate(IMAGE_SCANNED, () => {
    return ""
  })

  function onClickNext() {
    goto('/th/id-card-scanner/form')
  }

  function onClickBack() {
    goto('/th/id-card-scanner/scan')
  }
</script>

<PreviewScanImage {imageScanned} {onClickBack} {onClickNext}/>
