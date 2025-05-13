import {getContext, setContext} from "svelte"
import {StateStore} from "$lib/core/state-store"

const SELFIE_CONTEXT = "SELFIE_STORE"
export const SELFIE_CAPTURED = "SELFIE_CAPTURED"

export type SetSelfieContext = {
  readonly stateStore: StateStore
}

export const SetSelfieContext = {
  set: (context: SetSelfieContext): SetSelfieContext => {
    return setContext(SELFIE_CONTEXT, context)
  },
  get: (): SetSelfieContext => {
    try {
      console.log('Selfie context:', getContext('SELFIE_CONTEXT'));
      return getContext(SELFIE_CONTEXT)
    } catch (e) {
      throw new Error("Cannot get `SetSelfieContext`,it may not be set")
    }
  }
}


