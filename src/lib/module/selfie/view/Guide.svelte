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
    } from '@bull-shark/tdh-lib-mason'
  import selfieGuideImage from "../selfie-guide-image.png"
  import LayoutBase from '$lib/module/common/LayoutBase.svelte';
  import type { SelfieDictionary } from '$lib/core/l10n/selfie';
  export let captions: SelfieDictionary
  export let onClickNext: () => void

  </script>
  
  <TopNavBar   
          id="top-nav-bar"
          title="ยืนยันตัวตน"
          leftIconName={IconName.West}/>
  <LayoutBase
        titleCaption={captions.guid.title}
        footerPrimaryBtnText={captions.guid.footerBtn}
        onPrimaryBtnClick={onClickNext}>

        <VBox custom="w-full items-center">
          <img src={selfieGuideImage} alt="guide" />
        </VBox>
        <VBox custom="w-full items-start pt-4 px-5" verticalAlign={VerticalAlign.Top}>
            <Text color={TextColor.Grey500} style={TextStyle.Body2} >{@html captions.guid.desc} </Text>
        </VBox>
  </LayoutBase>
  