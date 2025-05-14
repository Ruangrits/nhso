<script lang="ts">
  import {
    VBox,
    Text
  } from '@bull-shark/tdh-lib-mason'
  import BaseBackground from "$lib/module/common/BaseBackground.svelte"
  import doctor from "../../../lib/module/common/images/doctor.png"
</script>

<BaseBackground>
    <VBox custom="h-full w-full">
        <img class="border-2 border-grey-300 rounded-full h-32 w-32" src={doctor}>
        <Text></Text>
    </VBox>
</BaseBackground>
