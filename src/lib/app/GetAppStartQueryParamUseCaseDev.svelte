<script context="module" lang="ts">
  import {Platform} from "./app-context"

  export type AppStartQueryParams = {
    platform: Platform
  }
</script>

<script lang="ts">
  import {Enum} from "@bull-shark/tdh-lib-mason/lang-ext"
  import {FailureModal} from "@bull-shark/tdh-lib-mason"

  export let url: URL

  let param: AppStartQueryParams
  param = {
    platform: Platform.iOS,
  }

</script>

<slot result={param}>
    <slot name="success" {param}/>
</slot>
