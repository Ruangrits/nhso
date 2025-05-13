<script lang="ts">
  import {
    GapSize,
    HBox,
    IconName,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VBox,
    VerticalAlign,
    WarnModal,
    TextArea,
    Icon,
    IconStyle,
    IconSize
  } from '@bull-shark/tdh-lib-mason'
  import {type SpeechRecognition} from "$lib/core/speech-recognition"
  import {onDestroy} from "svelte"

  export let value: string = ""
  export let placeholder: string = ''
  export let required: boolean = false
  export let disabled: boolean = false
  export let contenteditable: boolean = false

  let recognition: SpeechRecognition
  let isListening: boolean = false
  let transcript: string = ""
  const startRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser doesn't support speech recognition.")
      return
    }

    recognition = new webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true

    recognition.lang = 'th-TH'
    recognition.onstart = () => {
      isListening = true
    }

    recognition.onend = () => {
      isListening = false
    }

    recognition.onresult = (event) => {
      let result = event.results[event.resultIndex]
      if (result.isFinal) {
        value += result[0].transcript + " "
      }
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error)
    }

    recognition.start()
  }

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop()
    }
  }

  onDestroy(() => stopRecognition())
</script>

<div class="relative w-full">
    <TextArea bind:value
              {placeholder}
              {disabled}
              {required}
              {contenteditable}/>
    <button class="absolute bottom-1 right-1" on:click={isListening ? stopRecognition : startRecognition}>
        <Icon name={IconName.Mic}
              size={IconSize.md18}
              color={isListening ? TextColor.Primary300 :TextColor.Grey300 }
        />
    </button>
</div>
