  import { MessageBus } from "@bull-shark/tdh-lib-mason/message-bus";
import { SubmitSelfieAction, type SelfieAction } from "./message";

export class SelfieActionHandler {
  constructor(selfieImage: string,messageBus: MessageBus<SelfieAction>) {
    messageBus.subscribe((m: SelfieAction) => {
      if (m instanceof SubmitSelfieAction) {
        this.submitSelfie(m,selfieImage);
      }
    });
  }


  submitSelfie(m: SubmitSelfieAction,selfieImage: string) {
    
  }
}
