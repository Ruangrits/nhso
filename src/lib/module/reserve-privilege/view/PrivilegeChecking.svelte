<script lang="ts">
  import {GapSize, HorizontalAlign, Text, TextAlign, TextStyle, VBox, Loading} from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/reserve-privilege/view/LayoutBase.svelte"
  import type {ReservePrivilegeDictionary} from "$lib/core/l10n/reserve-privilege"

  export let captions: ReservePrivilegeDictionary
</script>

<LayoutBase>
    <VBox custom="w-full h-full"
          gapSize={GapSize['24px']}
          horizontalAlign={HorizontalAlign.Center}>
        <Loading/>
        <Text style={TextStyle.H2} align={TextAlign.Center}>{captions.checking.title}</Text>
        <Text style={TextStyle.Body1} align={TextAlign.Center}>{@html captions.checking.subtitle}</Text>
    </VBox>
</LayoutBase>
