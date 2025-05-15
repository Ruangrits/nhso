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
  import { SubmitSelfieAction, type SelfieAction } from "../message";
  import { SelfieActionHandler } from "../action-handler";
  import { Ask } from "@bull-shark/tdh-lib-mason/async";
  import type { InvalidSelfieUiCaption } from "../failure-handler/selfie-failure-handler";
  import type { Done } from "@bull-shark/tdh-lib-mason/lang-ext";
  import { ActionPageState } from "$lib/module/common/ActionPageState.enum";
  import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte";

  let isDialogWarnServiceNotAvailable: boolean = false;
  export let selfieCaptured: string;
  export let onClickBack: () => void;
  export let onNext: () => void;
  export let captions: SelfieDictionary;
  let actionPageState: ActionPageState = ActionPageState.clear;

  const selfieMessage = new MessageBus<SelfieAction>();
  new SelfieActionHandler(selfieCaptured, selfieMessage);
  let error: InvalidSelfieUiCaption;
  function submitSelfieToVisionService(selfieImage: string) {
    const ask = Ask<InvalidSelfieUiCaption, Done>();
    actionPageState = ActionPageState.pending;
    selfieMessage.dispatch(new SubmitSelfieAction(selfieImage, ask));
     setTimeout(() => {
      actionPageState = ActionPageState.clear;
      onNext();
    }, 2000); // 2000 milliseconds = 2 seconds
    // mock navigate

    ask.onSuccess((_) => {
      actionPageState = ActionPageState.clear;
      //TODO: navigate
      onNext();
      //-----------
    });
    ask.onError((e) => {
      actionPageState = ActionPageState.error;
      error = e;
      isDialogWarnServiceNotAvailable = true;
    });
  }
</script>

{#if actionPageState === ActionPageState.pending}
  <LoadingModal isDialogVisible={true} />
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
  onPrimaryBtnClick={() => submitSelfieToVisionService(selfieCaptured)}
  onSecondaryBtnClick={onClickBack}
>
  <img
    src={selfieCaptured}
    id="selie-preview"
    class="h-[80%] object-cover selfie-preview"
    alt=""
  />
</LayoutBase>

{#if error}
  <WarnModal
    bind:isDialogVisible={isDialogWarnServiceNotAvailable}
    title={error.title}
    desc={error.description}
    primaryBtnCaption={error.btnAcknowledge}
  />
{/if}
