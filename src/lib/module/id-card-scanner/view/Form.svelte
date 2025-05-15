<script lang="ts">
  import {
  HorizontalAlign,
    InputField,

    VBox,

    VerticalAlign


  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"
  import SelectBgNone from '$lib/module/prescreening/view/components/select/SelectBGNone.svelte';

  let idCardNumber = ""
  let familyName = ""
  let surname = ""
  let dateOfBirth = ""

  export let onClickNext: () => void
</script>
<LayoutBase titleCaption="ข้อมูลบัตรประชาชน"
            footerPrimaryBtnText="ถัดไป"
            onPrimaryBtnClick={onClickNext}>
    <InputField label="เลขบัตรประชาชน" bind:value={idCardNumber}/>
    <InputField label="ชื่อ" bind:value={familyName}/>
    <InputField label="นามสกุล" bind:value={surname}/>
    <VBox verticalAlign ={VerticalAlign.Top}>
    <SelectBgNone
        bind:value={dateOfBirth}
        placeholder="วว"
        id="date-of-birth"
        data={[]}
        />
         <SelectBgNone
        bind:value={dateOfBirth}
        placeholder="ดด"
        id="month-of-birth"
        data={[]}
        />
         <SelectBgNone
        bind:value={dateOfBirth}
        placeholder="ปีเกิด"
        id="year-of-birth"
        data={[]}
        />
      </VBox>

</LayoutBase>
