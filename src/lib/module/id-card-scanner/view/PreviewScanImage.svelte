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
  import { MessageBus } from '@bull-shark/tdh-lib-mason/message-bus';
  import { SubmitIdCardAction, type IdCardScannerAction } from '../message';
  import { IdCardScannerActionHandler } from '../action-handler';
  import { Ask } from '@bull-shark/tdh-lib-mason/async';
  import type { Done } from '@bull-shark/tdh-lib-mason/lang-ext';
 
  let actionPageState: ActionPageState = ActionPageState.clear;
  let invalidIdCardCounter: number = 0;

  export let imageScanned: string
  export let onClickNext: () => void
  export let onClickBack: () => void
  let error: InvalidIdCardCaption;
  let isDialogWarnServiceNotAvailable: boolean = false;

  const idCardScannerMessage = new MessageBus<IdCardScannerAction>();
  new IdCardScannerActionHandler(imageScanned, idCardScannerMessage);

  function submitIdCardToVisionService(idCardImage: string) {
    const ask = Ask<InvalidIdCardCaption, Done>();
    actionPageState = ActionPageState.pending;
    triggerIdCardSubmitEvent(idCardImage,ask);
   
    // TODO: remove this mock
     setTimeout(() => {
      actionPageState = ActionPageState.clear;
      onClickNext();
    }, 2000); 

    ask.onSuccess((_) => {
     handleSuccess();
    });
    ask.onError((e) => {
     handleErrorAndMaxAttempts(e)
    });
  }

  async function triggerIdCardSubmitEvent(idCardImage: string, ask: Ask<InvalidIdCardCaption, Done>) {
    idCardScannerMessage.dispatch(new SubmitIdCardAction(idCardImage, ask));
  }

  function handleSuccess(){
     actionPageState = ActionPageState.clear;
      //TODO: navigate
      onClickNext();
      //-----------
  }

  function handleErrorAndMaxAttempts(e: InvalidIdCardCaption){
     actionPageState = ActionPageState.error;
      error = e;
      error.onAcknowledge = () => {
        invalidIdCardCounter++;
        actionPageState = ActionPageState.clear;
        isDialogWarnServiceNotAvailable = false;
        if (invalidIdCardCounter >= 3) {
          onClickNext();
        }
      };
      isDialogWarnServiceNotAvailable = true;
  }

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
            onPrimaryBtnClick={() => submitIdCardToVisionService(imageScanned)}
            onSecondaryBtnClick={onClickBack}>
    <img src={imageScanned} alt=""/>
</LayoutBase>




