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
    Width,
  } from "@bull-shark/tdh-lib-mason";
  import LayoutBase from "$lib/module/common/LayoutBase.svelte";

  export let selfieCaptured: string;
  export let onClickNext: () => void;
  export let onClickBack: () => void;
</script>

<TopNavBar
  id="top-nav-bar"
  title="ยืนยันตัวตน"
  leftIconName={IconName.West}
  onLeftIconClick={() => {
    history.back();
  }}
/>
<LayoutBase
  titleCaption="ยืนยันรูปคู่บัตรประชาชน"
  isNeedStickyBottomBar={true}
  footerPrimaryBtnText="ถ่ายใหม่อีกครั้ง"
  footerSecondaryBtnText="ยืนยัน"
  onPrimaryBtnClick={onClickNext}
  onSecondaryBtnClick={onClickBack}
>
  <img
    src={selfieCaptured}
    id="selie-preview"
    class="h-[350px] object-cover selfie-preview"
    alt=""
  />
</LayoutBase>

<style>
</style>
