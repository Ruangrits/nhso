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
    Loading,
    LoadingModal,
  } from "@bull-shark/tdh-lib-mason";
  import LayoutBase from "$lib/module/common/LayoutBase.svelte";
  import type { SelfieDictionary } from "$lib/core/l10n/selfie";
  import { MessageBus } from "@bull-shark/tdh-lib-mason/message-bus";
  import { SelfieActionHandler } from "../action-handler";
  import type { InvalidSelfieUiCaption } from "../failure-handler/selfie-failure-handler";
  import { ActionPageState } from "$lib/module/common/ActionPageState.enum";
  import type { SelfieAction } from "../message";

  export let onClickBack: () => void;
  export let onNext: () => void;
  export let captions: SelfieDictionary;
  export let actionPageState: ActionPageState
  export let error: InvalidSelfieUiCaption;
  export let selfieCaptured: string;
  export let isDialogWarnServiceNotAvailable: boolean
  export let onSubmitSelfieToVisionService:(selfieImage: string, selfieMessage: MessageBus<SelfieAction>) => void

  const selfieMessage = new MessageBus<SelfieAction>();
  new SelfieActionHandler(selfieCaptured, selfieMessage);

</script>

{#if actionPageState === ActionPageState.pending}
  <LoadingModal isDialogVisible={true} />
{:else if actionPageState === ActionPageState.error}
  <WarnModal
    bind:isDialogVisible={isDialogWarnServiceNotAvailable}
    title={error.title}
    desc={error.description}
    primaryBtnCaption={error.btnAcknowledge}
  />
  <LoadingModal isDialogVisible={false} />
{/if}

<TopNavBar
  id="top-nav-bar"
  title="ยืนยันตัวตน"
  customTxtTitle="!text-[20px] !font-semibold"
  leftIconName={IconName.West}
  onLeftIconClick={() => {
    history.back();
  }}
/>
<LayoutBase
  titleCaption={captions.scan.preview.title}
  isNeedStickyBottomBar={true}
  footerPrimaryBtnText={captions.scan.preview.footerPrimaryBtn}
  footerSecondaryBtnText={captions.scan.preview.footerSecondaryBtn}
  onPrimaryBtnClick={() => onSubmitSelfieToVisionService(selfieCaptured, selfieMessage)}
  onSecondaryBtnClick={onClickBack}
>
  <img
    src={selfieCaptured}
    id="selie-preview"
    class="h-[80%] object-cover selfie-preview"
    alt=""
  />
</LayoutBase>
