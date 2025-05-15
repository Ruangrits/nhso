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

    LoadingModal


  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"
  import type { InvalidIdCardCaption } from '../failure-handler/id-card-failure-handler';
  import { ActionPageState } from '$lib/module/common/ActionPageState.enum';
 
  export let actionPageState: ActionPageState
  export let imageScanned: string
  export let error: InvalidIdCardCaption;
  export let isDialogWarnServiceNotAvailable: boolean 
  export let onClickBack: () => void
  export let submitIdCardToVisionService:() => void

</script>



{#if actionPageState === ActionPageState.pending}
  <LoadingModal isDialogVisible={true} />
{:else if actionPageState === ActionPageState.error}
  <WarnModal
    bind:isDialogVisible={isDialogWarnServiceNotAvailable}
    title={error.title}
    desc={error.description}
    primaryBtnCaption={error.btnAcknowledge}
    onPrimaryBtnClick={error.onAcknowledge}
  />
{/if}

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
            onPrimaryBtnClick={submitIdCardToVisionService}
            onSecondaryBtnClick={onClickBack}>
    <img src={imageScanned} alt=""/>
</LayoutBase>




