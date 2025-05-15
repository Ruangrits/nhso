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

  export let imageScanned: string
  export let onClickNext: () => void
  export let onClickBack: () => void

</script>
<TopNavBar
  id="top-nav-bar"
  title="สแกนบัตรประชาชน"
  customTxtTitle="!text-[20px] !font-semibold"
  leftIconName={IconName.West}
  onLeftIconClick={() => {
    history.back();
  }}
/>
<LayoutBase titleCaption="สแกนบัตรประชาชน"
            footerPrimaryBtnText="ยืนยัน"
            footerSecondaryBtnText="ถ่ายใหม่อีกครั้ง"
            onPrimaryBtnClick={onClickNext}
            onSecondaryBtnClick={onClickBack}>
    <img src={imageScanned}/>
</LayoutBase>


