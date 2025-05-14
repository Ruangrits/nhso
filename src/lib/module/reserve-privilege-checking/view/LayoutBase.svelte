<script lang="ts">
  import {
    VBox,
    Card,
    Text,
    TextStyle,
    HorizontalAlign,
    TextAlign,
    GapSize,
  } from '@bull-shark/tdh-lib-mason'
  import BaseBackground from "$lib/module/common/BaseBackground.svelte"
</script>

<BaseBackground>
    <VBox custom="w-full h-full px-4">
        <Card custom="w-full py-8">
            <slot/>
        </Card>
    </VBox>
</BaseBackground>
