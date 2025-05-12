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
    Button,
    ButtonStyle
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import TextAreaWithSpeech from "$lib/module/prescreening/view/components/TextAreaWithSpeech.svelte"
  import {type Symptoms, symptoms, SymptomsType} from "$lib/module/prescreening/data/symptoms.js"
  import type {PreScreenDictionary} from "$lib/core/l10n/prescreen"

  export let captions: PreScreenDictionary
  export let onClickNext: () => {}

  let additionalSymptomsValue: string = ""
  let isDialogWarnRequiredField: boolean = false
  let isDialogWarnServiceNotAvailable: boolean = false
  let value: Array<Symptoms> = []

  function handleSelectValue(selection: Symptoms) {
    switch (selection.type) {
      case SymptomsType.Normal:
        const scn = value.find((v) => v.value == selection.value)
        if (scn) value = value.filter(i => i.value !== scn.value)
        else {value.push(selection);value = value.filter(i => i.type !== SymptomsType.ButtonReverse)}
        break
      case SymptomsType.ButtonReverse:
        const scr = value.find((v) => v.type == SymptomsType.ButtonReverse)
        if (scr === undefined) {value = [];value.push(selection)} else {value = []}
        break
    }
    value = value
  }

  function handleOnClickNext() {
    if (value.length == 0 && additionalSymptomsValue == "") isDialogWarnRequiredField = true
    if (value.length > 0) {
      const selectedOther = value.findIndex(v => v.type === SymptomsType.ButtonReverse) !== -1
      if (selectedOther && additionalSymptomsValue == "") isDialogWarnRequiredField = true
      else onClickNext()
    }
  }
</script>

<LayoutBase numberOfPages={[1,2,3]}
            currentPage={1}
            topNavBarLeftIconName={IconName.No}
            onClickNext={handleOnClickNext}>

    <VBox gapSize={GapSize['16px']} custom="h-full w-full" verticalAlign={VerticalAlign.Top}>
        <VBox custom=" w-full " verticalAlign={VerticalAlign.Top}>
            <Text color={TextColor.Grey500} style={TextStyle.H2} align={TextAlign.Left}>
                <HBox>{captions.symptomSelection.title}</HBox>
            </Text>
            <Text color={TextColor.Grey500} style={TextStyle.Body1}>{captions.symptomSelection.subTitle}
            </Text>
        </VBox>

        <VBox custom="h-full w-full" verticalAlign={VerticalAlign.Top}>
            {#each symptoms as selection,index}
                <button class="btn btn-md btn-outline w-full {value.includes(selection) ? 'bg-primary-50 border-primary-300' : 'border-grey-200'}"
                        on:click={() => handleSelectValue(selection)} on:click|stopPropagation>
                    <Text style={TextStyle.Body1}>{selection.label}</Text>
                </button>
            {/each}
        </VBox>

        <VBox custom="h-full w-full pb-4" verticalAlign={VerticalAlign.Top}>
            <Text color={TextColor.Grey500} style={TextStyle.H4}>
                <HBox> {captions.symptomSelection.additionalSymptoms.title}
                    {#if value.findIndex(v => v.type === SymptomsType.ButtonReverse) !== -1}
                        <p class="text-red-600">*</p>
                    {/if}
                </HBox>
            </Text>
            <TextAreaWithSpeech bind:value={additionalSymptomsValue}
                                placeholder={captions.symptomSelection.additionalSymptoms.placeholder}/>
        </VBox>
    </VBox>
</LayoutBase>

<WarnModal bind:isDialogVisible={isDialogWarnServiceNotAvailable}
           title={captions.symptomSelection.warnDialogServiceNotAvailable.title}
           desc={captions.symptomSelection.warnDialogServiceNotAvailable.desc}
           primaryBtnCaption={captions.symptomSelection.warnDialogServiceNotAvailable.btn}/>

<WarnModal bind:isDialogVisible={isDialogWarnRequiredField}
           title={captions.symptomSelection.warnDialogServiceNotAvailable.title}
           desc={captions.symptomSelection.warnDialogServiceNotAvailable.desc}
           primaryBtnCaption={captions.symptomSelection.warnDialogServiceNotAvailable.btn}/>
