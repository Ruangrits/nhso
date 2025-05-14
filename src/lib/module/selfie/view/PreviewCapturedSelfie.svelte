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
    WarnModal,
  } from "@bull-shark/tdh-lib-mason";
  import LayoutBase from "$lib/module/common/LayoutBase.svelte";
  import type { SelfieDictionary } from "$lib/core/l10n/selfie";

  let isDialogWarnServiceNotAvailable: boolean = false
  export let selfieCaptured: string;
  export let onClickNext: () => void;
  export let onClickBack: () => void;
  export let captions: SelfieDictionary
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
  footerPrimaryBtnText="ยืนยัน"
  footerSecondaryBtnText="ถ่ายใหม่อีกครั้ง"
  onPrimaryBtnClick={onClickNext}
  onSecondaryBtnClick={onClickBack}
>
  <img
    src={selfieCaptured}
    id="selie-preview"
    class="h-[80%] object-cover selfie-preview"
    alt=""
  />
</LayoutBase>
<!-- <WarnModal bind:isDialogVisible={isDialogWarnRequiredField}
           title={captions.symptomSelection.warnDialogServiceNotAvailable.title}
           desc={captions.symptomSelection.warnDialogServiceNotAvailable.desc}
           primaryBtnCaption={captions.symptomSelection.warnDialogServiceNotAvailable.btn}/> -->

