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

  let isDialogWarnRequiredField: boolean = false
  export let selfieCaptured: string;
  export let onClickNext: () => void;
  export let onClickBack: () => void;
  export let captions: SelfieDictionary

  let isWarnModalVisible = false;
  let warnModalTitle = "";
  let warnModalDesc = "";
  let warnModalBtn = "";

  function showWarnModal({ title, desc, btn }: { title: string; desc: string; btn: string }) {
    warnModalTitle = title;
    warnModalDesc = desc;
    warnModalBtn = btn;
    isWarnModalVisible = true;
  }
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
<!-- <WarnModal bind:isDialogVisible={isDialogWarnRequiredField}
           title={captions.symptomSelection.warnDialogServiceNotAvailable.title}
           desc={captions.symptomSelection.warnDialogServiceNotAvailable.desc}
           primaryBtnCaption={captions.symptomSelection.warnDialogServiceNotAvailable.btn}/> -->

