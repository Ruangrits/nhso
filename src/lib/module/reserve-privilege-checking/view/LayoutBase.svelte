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
  import CheckingBackground from "$lib/module/common/CheckingBackground.svelte"
</script>

<CheckingBackground>
    <VBox custom="w-full h-full px-4">
        <Card custom="w-full py-8">
            <slot/>
        </Card>
    </VBox>
</CheckingBackground>
