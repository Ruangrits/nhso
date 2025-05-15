<script lang="ts">
  import { goto } from "$app/navigation";
  import { AppContext } from "$lib/app/app-context";
  import { StateStore } from "$lib/core/state-store";
  import { ActionPageState } from "$lib/module/common/ActionPageState.enum";
  import { SelfieActionHandler } from "$lib/module/selfie/action-handler";
  import { SELFIE_CAPTURED, SetSelfieContext } from "$lib/module/selfie/context";
  import type { InvalidSelfieUiCaption } from "$lib/module/selfie/failure-handler/selfie-failure-handler";
  import { SubmitSelfieAction, type SelfieAction } from "$lib/module/selfie/message";
  import PreviewCapturedSelfie from "$lib/module/selfie/view/PreviewCapturedSelfie.svelte";
  import { Ask } from "@bull-shark/tdh-lib-mason/async";
  import type { Done } from "@bull-shark/tdh-lib-mason/lang-ext";
  import { MessageBus } from "@bull-shark/tdh-lib-mason/message-bus";

  const selfieCaptured: string = StateStore.getOrCreate(SELFIE_CAPTURED, () => {
    return ""
  })

  const appContext = AppContext.get()
  const captions = appContext.translation.selfie
  const navCtrl = appContext.navCtrl
  let actionPageState: ActionPageState = ActionPageState.clear;
  let isDialogWarnServiceNotAvailable: boolean = false
  let error: InvalidSelfieUiCaption;

  const selfieMessage = new MessageBus<SelfieAction>();
  new SelfieActionHandler(selfieCaptured, selfieMessage);



  function onClickBack() {
    goto('/th/selfie/scan')
  }

  //TODO: just create for test flow [can remove]
  function onNext() {
    goto(navCtrl.page().reservePrivilege.landing)
  }

  function updatePageState(state: ActionPageState) {
    actionPageState = state;
  }

  function onSubmitSelfieToVisionService() {
    updatePageState(ActionPageState.pending);
    const ask = Ask<InvalidSelfieUiCaption, Done>();
    triggerSelfieSubmitEvent(selfieMessage,selfieCaptured,ask);
    // TODO: remove this mock
    setTimeout(() => {
      updatePageState(ActionPageState.clear);
      onNext();
    }, 2000);
    ask.onSuccess((_) => {
      handleSuccess();
    });
    ask.onError((e) => {
      handleError(e);
    });
  }

  async function triggerSelfieSubmitEvent(
    selfieMessage: MessageBus<SelfieAction>,
    selfieImage: string,
    ask: Ask<InvalidSelfieUiCaption, Done>
  ) {
    selfieMessage.dispatch(new SubmitSelfieAction(selfieImage, ask));
  }

  function handleSuccess() {
   updatePageState(ActionPageState.clear);
    //TODO: navigate
    onNext();
    //-----------
  }

  function handleError(e: InvalidSelfieUiCaption) {
    updatePageState(ActionPageState.error);
    error = e;
    isDialogWarnServiceNotAvailable = true;
  }

</script>

<PreviewCapturedSelfie {onClickBack} {captions} {actionPageState} {error} {selfieCaptured} {isDialogWarnServiceNotAvailable} {onSubmitSelfieToVisionService} />
