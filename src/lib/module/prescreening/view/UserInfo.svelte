<script lang="ts" context="module">
  type ChronicDiseaseModel = {
    hasDisease: boolean
    diseaseDetails: string
  }

  type HistoryOfDrugAllergyModel = {
    hasAllergy: boolean
    drugAllergyDetails: string
  }
</script>
<script lang="ts">
  import {
    HBox,
    InputField,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VBox,
    BoxItemSpread,
    GapSize
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import InputRadio from "$lib/module/prescreening/view/components/InputRadio.svelte"
  import TextAreaWithSpeech from "$lib/module/prescreening/view/components/TextAreaWithSpeech.svelte"
  import type {PreScreenDictionary} from "$lib/core/l10n/prescreen"

  export let captions: PreScreenDictionary
  export let onClickNext: () => void

  let chronicDisease: ChronicDiseaseModel = {hasDisease: false, diseaseDetails: ''}
  let drugAllergyHistory: HistoryOfDrugAllergyModel = {hasAllergy: false, drugAllergyDetails: ''}

  function handleOnClickNext() {
    onClickNext()
  }
</script>

<LayoutBase numberOfPages={[1,2,3]} currentPage={2} onClickNext={handleOnClickNext}>
    <VBox custom="w-full">
        <InputField label={captions.userInfo.height.title} unit={captions.userInfo.height.unit} required type="tel" mode="tel"/>
        <InputField label={captions.userInfo.weight.title} unit={captions.userInfo.weight.unit} required type="tel" mode="tel"/>

        <VBox custom="w-full" gapSize={GapSize['16px']}>
            <Text color={TextColor.Grey500} style={TextStyle.H4}
                  align={TextAlign.Center}>{captions.userInfo.disease.title}</Text>
            <HBox custom="w-full">
                <InputRadio label={captions.userInfo.disease.value.yes}
                            bind:group={chronicDisease.hasDisease}
                            value={true}
                            custom="w-full"/>
                <InputRadio label={captions.userInfo.disease.value.no}
                            bind:group={chronicDisease.hasDisease}
                            value={false}
                            custom="w-full"/>
            </HBox>
            {#if chronicDisease.hasDisease}
                <TextAreaWithSpeech bind:value={chronicDisease.diseaseDetails}
                                    placeholder={captions.userInfo.disease.detail.placeholder}/>
            {/if}
        </VBox>

        <VBox custom="w-full" gapSize={GapSize['16px']}>
            <Text color={TextColor.Grey500} style={TextStyle.H4}
                  align={TextAlign.Center}>{captions.userInfo.drugAllergy.title}</Text>
            <HBox custom="w-full">
                <InputRadio label={captions.userInfo.drugAllergy.value.yes} bind:group={drugAllergyHistory.hasAllergy}
                            value={true} custom="w-full"/>
                <InputRadio label={captions.userInfo.drugAllergy.value.no} bind:group={drugAllergyHistory.hasAllergy}
                            value={false} custom="w-full"/>
            </HBox>
            {#if drugAllergyHistory.hasAllergy}
                <TextAreaWithSpeech bind:value={drugAllergyHistory.drugAllergyDetails}
                                    placeholder={captions.userInfo.drugAllergy.detail.placeholder}/>
            {/if}
        </VBox>
    </VBox>
</LayoutBase>
