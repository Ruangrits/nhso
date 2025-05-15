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
  import thaiNationalId from "../thai-nation-id-card.png"
  import type {IdCardScannerDictionary} from "$lib/core/l10n/id-card-scanner"

  export let captions: IdCardScannerDictionary
  export let onClickNext: () => void
  export let onTopBarIconLeft: () => void
</script>

<TopNavBar 
  id="top-nav-bar"
  title="สแกนบัตรประชาชน"
  custom="!text-[20px] !font-semibold"
  leftIconName={IconName.West}
/>
<LayoutBase titleCaption={captions.guid.title}
            footerPrimaryBtnText={captions.guid.footerBtn}
            onPrimaryBtnClick={onClickNext} >
            <VBox horizontalAlign={HorizontalAlign.Center} custom="w-full">
              <VBox custom="w-[251px] h-[153px] flex items-center justify-center">
                <img src={thaiNationalId} alt="thai-national-id" class="object-contain w-full h-full"
                />
              </VBox>
            </VBox>
    <VBox custom="w-full items-start pt-4 px-4" verticalAlign={VerticalAlign.Top}>
        <Text color={TextColor.Grey500} custom="!text-[20px] !font-medium">{@html captions.guid.desc} </Text>
    </VBox>
</LayoutBase>
