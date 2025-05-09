import {getContext, setContext} from "svelte"
import {StateStore} from "$lib/core/state-store"

const ID_CARD_SCANNER_CONTEXT = "ID_CARD_SCANNER_STORE"
export const IMAGE_SCANNED = "IMAGE_SCANNED"

export type SetIdCardScannerContext = {
  readonly stateStore: StateStore
}

export const SetIdCardScannerContext = {
  set: (context: SetIdCardScannerContext): SetIdCardScannerContext => {
    return setContext(ID_CARD_SCANNER_CONTEXT, context)
  },
  get: (): SetIdCardScannerContext => {
    try {
      return getContext(ID_CARD_SCANNER_CONTEXT)
    } catch (e) {
      throw new Error("Cannot get `SetIdCardScannerContext`,it may not be set")
    }
  }
}
