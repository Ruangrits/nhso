<script lang="ts">
  import {
    IconName,
    TopNavBar,
    Layout,
    ActionModal,
    ButtonStyle,
    ButtonVariant,
    Card,
    HBox,
    VBox,
    GapSize,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VerticalAlign,
    HorizontalAlign,
    StickyBottomBar,
    Button,
    Width
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"
  import thaiNationId from "../thai-nation-id-card.png"
  import type {IdCardScannerDictionary} from "$lib/core/l10n/id-card-scanner"

  export let captions: IdCardScannerDictionary
  export let onClickNext: () => void
  export let onTopBarIconLeft: () => void
</script>

<LayoutBase titleCaption={captions.guid.title}
            footerPrimaryBtnText={captions.guid.footerBtn}
            onTopBarIconLeft={onTopBarIconLeft}
            onPrimaryBtnClick={onClickNext}>
    <img src={thaiNationId}/>
    <VBox verticalAlign={VerticalAlign.Top}>
        <Text color={TextColor.Grey500} style={TextStyle.Body2}>{@html captions.guid.desc} </Text>
    </VBox>
</LayoutBase>
