import { MessageBus } from "@bull-shark/tdh-lib-mason/message-bus";
import { SubmitIdCardAction, type IdCardScannerAction } from "./message";


export class IdCardScannerActionHandler {
  constructor(idCardImage: string,messageBus: MessageBus<IdCardScannerAction>) {
    messageBus.subscribe((m: IdCardScannerAction) => {
      if (m instanceof SubmitIdCardAction) {
        this.submitIdCard(m,idCardImage);
      }
    });
  }

  submitIdCard(m: SubmitIdCardAction,idCardImage: string) {
    
  }
}
