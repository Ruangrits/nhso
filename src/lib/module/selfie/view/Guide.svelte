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
    import LayoutBase from "$lib/module/selfie/view/components/LayoutBase.svelte"
    import Guide from "../guide.png"
  import type { SelfieDictionary } from '$lib/core/l10n/selfie';
  
    export let captions: SelfieDictionary
    export let onClickNext: () => void
  </script>
  
  <LayoutBase titleCaption={captions.guid.title}
              footerPrimaryBtnText={captions.guid.footerBtn}
              onPrimaryBtnClick={onClickNext}>
      <img src={Guide}/>
      <VBox verticalAlign={VerticalAlign.Top}>
          <Text color={TextColor.Grey500} style={TextStyle.Body2}>{@html captions.guid.desc} </Text>
      </VBox>
  </LayoutBase>
  