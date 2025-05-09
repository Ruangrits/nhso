<script lang="ts">
  import IdScanner from "$lib/module/id-card-scanner/view/Scan.svelte"
  import {page} from "$app/state"
  import {goto} from "$app/navigation"
  import {
    IMAGE_SCANNED,
    SetIdCardScannerContext
  } from "$lib/module/id-card-scanner/context"
  import {AppContext} from "$lib/app/app-context"

  const {stateStore} = SetIdCardScannerContext.get()

  const appContext = AppContext.get()
  const captions = appContext.translation.idCardScanner

  function onClickNext() {
    goto('/th/id-card-scanner/scan/preview')
  }

  function onSnapShot(imageScanned: string) {
    stateStore.create(IMAGE_SCANNED, imageScanned)
  }

</script>


<IdScanner {onClickNext} {onSnapShot} {captions}/>



