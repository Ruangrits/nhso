import type { Ask } from "@bull-shark/tdh-lib-mason/async";
import type { InvalidSelfieUiCaption } from "./failure-handler/selfie-failure-handler";
import type { Success } from "@bull-shark/tdh-lib-mason/svelte/async";
import type { Done } from "@bull-shark/tdh-lib-mason/lang-ext";

export interface SelfieAction {
}

export class SubmitSelfieAction implements SelfieAction {
  constructor(
    readonly selfieImage: string,
    readonly ask: Ask<InvalidSelfieUiCaption, Done>
  ) {
  }
}