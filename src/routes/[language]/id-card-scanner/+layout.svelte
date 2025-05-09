<script lang="ts">
  import {SetIdCardScannerContext} from "$lib/module/id-card-scanner/context"
  import {StateStore} from "$lib/core/state-store"

  SetIdCardScannerContext.set({
    stateStore: StateStore
  })
</script>

<slot/>
