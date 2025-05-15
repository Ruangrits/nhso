<script lang="ts">
  import {IMAGE_SCANNED, SetIdCardScannerContext} from "$lib/module/id-card-scanner/context"
  import PreviewScanImage from "$lib/module/id-card-scanner/view/PreviewScanImage.svelte"
  import {goto} from "$app/navigation"
  import { ActionPageState } from "$lib/module/common/ActionPageState.enum";
  import type { InvalidIdCardCaption } from "$lib/module/id-card-scanner/failure-handler/id-card-failure-handler";
  import { MessageBus } from "@bull-shark/tdh-lib-mason/message-bus";
  import { SubmitIdCardAction, type IdCardScannerAction } from "$lib/module/id-card-scanner/message";
  import { IdCardScannerActionHandler } from "$lib/module/id-card-scanner/action-handler";
  import { Ask } from "@bull-shark/tdh-lib-mason/async";
  import type { Done } from "@bull-shark/tdh-lib-mason/lang-ext";

  const {stateStore} = SetIdCardScannerContext.get()

  const imageScanned: string = stateStore.getOrCreate(IMAGE_SCANNED, () => {
    return ""
  })

  let actionPageState: ActionPageState = ActionPageState.clear;
  let invalidIdCardCounter: number = 0
  let error: InvalidIdCardCaption;
  let isDialogWarnServiceNotAvailable: boolean = false

  const idCardScannerMessage = new MessageBus<IdCardScannerAction>();
  new IdCardScannerActionHandler(imageScanned, idCardScannerMessage);



  function onClickNext() {
    goto('/th/id-card-scanner/form')
  }

  function onClickBack() {
    goto('/th/id-card-scanner/scan')
  }


  function updatePageState(state: ActionPageState) {
    actionPageState = state;
  }

  
  function submitIdCardToVisionService() {
    const ask = Ask<InvalidIdCardCaption, Done>();
    updatePageState(ActionPageState.pending);
    triggerIdCardSubmitEvent(imageScanned,ask);
   
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
    updatePageState(ActionPageState.clear);
      //TODO: navigate
      onClickNext();
      //-----------
  }

  function handleErrorAndMaxAttempts(e: InvalidIdCardCaption){
    updatePageState(ActionPageState.error);
      error = e;
      error.onAcknowledge = () => {
        invalidIdCardCounter++;
       updatePageState(ActionPageState.clear);
        isDialogWarnServiceNotAvailable = false;
        if (invalidIdCardCounter >= 3) {
          onClickNext();
        }
      };
      isDialogWarnServiceNotAvailable = true;
  }

</script>

<PreviewScanImage {actionPageState} {imageScanned} {error} {isDialogWarnServiceNotAvailable}{onClickBack} {submitIdCardToVisionService}/>
