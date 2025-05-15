<script lang="ts">
  import {
    GapSize,
    HorizontalAlign,
    Icon,
    IconName,
    IconSize,
    IconStyle,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VBox
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/reserve-privilege/view/LayoutBase.svelte"

  import type {ReservePrivilegeDictionary} from "$lib/core/l10n/reserve-privilege"

  export let captions: ReservePrivilegeDictionary
</script>
<LayoutBase>
    <VBox custom="w-full h-full"
          gapSize={GapSize['16px']}
          horizontalAlign={HorizontalAlign.Center}>
        <Icon
                name={IconName.Info}
                style={IconStyle.Normal}
                size={IconSize.md52}
                color={TextColor.Warning200}
                custom="m-1.5"
        />

        <Text style={TextStyle.H2} align={TextAlign.Center}>{@html captions.rejected.title}</Text>
        <Text style={TextStyle.Subtitle1} align={TextAlign.Center}>{@html captions.rejected.subtitle}</Text>
    </VBox>
</LayoutBase>
