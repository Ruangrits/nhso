import type { Ask } from "@bull-shark/tdh-lib-mason/async";
import type { Done } from "@bull-shark/tdh-lib-mason/lang-ext";
import type { InvalidIdCardCaption } from "./failure-handler/id-card-failure-handler";

export interface IdCardScannerAction {
}

export class SubmitIdCardAction implements IdCardScannerAction {
  constructor(
    readonly idCardImage: string,
    readonly ask: Ask<InvalidIdCardCaption, Done>
  ) {
  }
}