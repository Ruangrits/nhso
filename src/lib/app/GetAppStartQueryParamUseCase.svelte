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

  const unsafeParam = {
    platform: url.searchParams.get('platform'),
  }

  let param: AppStartQueryParams
  let error: { code: string; msg: string }

  if (unsafeParam.platform == null || !Enum.isSafeToParse(unsafeParam.platform, Platform))
    error = {
      code: '400 Bad Request',
      msg: 'Please provide valid platform or contact our customer support at LINE @MorDeeapp'
    }
  else
    param = {
      platform: Enum.unsafeParse(unsafeParam.platform),
    }

</script>

<slot result={param} {error}>
    {#if param !== undefined}
        <slot name="success" {param}/>
    {:else}
        <slot name="failed" {error}>
            <FailureModal
                    isDialogVisible={true}
                    title={error.code}
                    desc={error.msg}
                    primaryBtnCaption="Acknowlege"
                    onPrimaryBtnClick={() => {window.location.href = 'https://mordeeapp.com?action=EXIT'}}
            />
        </slot>
    {/if}
</slot>
