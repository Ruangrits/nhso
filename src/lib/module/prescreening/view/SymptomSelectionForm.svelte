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
    WarnModal
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import {goto} from "$app/navigation"

  $: value = []
  const options = [
    {label: "ไข้ ปวดหัว", value: "fever_sore_throat"},
    {label: "ไอ เจ็บคอ มีน้ำมูก", value: "fever_sore_throat_runny_nose"},
    {label: "คลื่นไส้ อาเจียน", value: "itchy_tongue_vomiting"},
    {label: "ปวดท้อง หรือจุกแน่นท้อง", value: "stomach_pain_or_bloating"},
    {label: "ตรวจโควิดโดย ATK ขึ้น 2 ขีด", value: "covid_test_atk_2_lines"},
    {label: "มีตุ่มแดงหรือตุ่มหนองรอบดวงตา", value: "red_spots_or_blood_clotting"},
    {label: "ผื่นคัน ลมพิษ", value: "itchy_skin_hives"},
    {label: "ศีรษะ ตาแดง", value: "head_eye_redness"},
    {label: "ปวดเมื่อยกล้ามเนื้อ", value: "muscle_ache"},
    {label: "เวียนหัว ปวดหัว บ้านหมุน", value: "head_infection_headache_dizziness"},
    {label: "ปวดหัวเข่าหรือสะโพก", value: "side_headache_radiating_to_brain"},
    {label: "ไม่มีการเหล่านี้", value: "no_eye_strain"}
  ]

  let isDialogWarnRequiredField: boolean = false
  let isDialogWarnServiceNotAvailable: boolean = false

  function handleSelectValue(selection: { label: string, value: string }) {
    const sc = value.find((v) => v.value == selection.value)
    if (sc) {
      value = value.filter(i => i.value !== sc.value)
    } else {
      value.push(selection)
      value = value
    }
  }

  function onClickNext() {
    if (value.length > 0) {
      const notFoundIdx = value.findIndex(v => v.value == "no_eye_strain") == -1
      if (notFoundIdx) {
        goto('/th/prescreen/user-info')
      } else isDialogWarnServiceNotAvailable = true
    } else isDialogWarnRequiredField = true
  }
</script>

<LayoutBase numberOfPages={[1,2,3]}
            currentPage={1}
            topNavBarLeftIconName={IconName.No}
            onClickNext={onClickNext}>
    <VBox gapSize={GapSize['16px']} custom="h-full w-full" verticalAlign={VerticalAlign.Top}>
        <VBox custom=" w-full " verticalAlign={VerticalAlign.Top}>
            <Text color={TextColor.Grey500} style={TextStyle.Subtitle1} align={TextAlign.Center}>
                <HBox>Do you have any of these symptoms?<p class="text-red-600">*</p></HBox>
            </Text>
            <Text color={TextColor.Grey500} style={TextStyle.Small2}>Symptoms that can use the right to medical
                treatment
                according to the terms of service from NHSO.
            </Text>
        </VBox>

        <VBox custom="h-full w-full" verticalAlign={VerticalAlign.Top}>
            <Text color={TextColor.Grey500} style={TextStyle.Subtitle2}>Select all of your symptoms.</Text>
            <VBox custom="h-[calc(100dvh-300px)] w-full border border-grey-200 rounded-md divide-y divide-grey-200 overflow-y-auto"
                  verticalAlign={VerticalAlign.Top}
                  gapSize={GapSize['0px']}>
                {#each options as selection,index}
                    <button class="w-full" on:click={() => handleSelectValue(selection)} on:click|stopPropagation
                            on:mousedown|stopPropagation>
                        <VBox custom="w-full h-full p-3 {value.includes(selection) ? 'bg-primary-50': ''}"
                              verticalAlign={VerticalAlign.Top}>
                            <div class="flex items-center me-4">
                                <input type="checkbox" checked={value.includes(selection)}>
                                <a class="ms-2 text-sm font-medium">{selection.label}</a>
                            </div>
                        </VBox>
                    </button>
                {/each}
            </VBox>
        </VBox>
    </VBox>
</LayoutBase>

<WarnModal bind:isDialogVisible={isDialogWarnServiceNotAvailable}
           title="ขออภัย ไม่สามารถให้บริการได้"
           desc="เนื่องจากสิทธิการรักษาพยาบาลอยู่นอกเงื่อนไขการให้บริการจากสปสช. หรือมีอาการเจ็บป่วยที่ควรรับการรักษา ณ สถานพยาบาล"
           primaryBtnCaption="รับทราบ"/>

<WarnModal bind:isDialogVisible={isDialogWarnRequiredField}
           title="เลือกหน่อยค่ะ"
           desc="เลือกให้หนูหน่อยค่ะ"
           primaryBtnCaption="เข้าใจ?"/>

<style>
    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 2px solid #ccc;
        background-color: #fff;
        position: relative;
        cursor: pointer;
    }

    input[type="checkbox"]:checked {
        background-color: var(--primary);
        border-color: var(--primary);
    }

    input[type="checkbox"]:checked::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 5px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    input[type="checkbox"]:not(:checked)::before {
        display: none;
    }
</style>
