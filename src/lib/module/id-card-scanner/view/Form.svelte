<script lang="ts">
  import {
    InputField
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"
  import SelectBgNone from '$lib/module/prescreening/view/components/select/SelectBGNone.svelte';

  export let idCardNumber = ""
  export let familyName = ""
  export let surname = ""
  export let dateOfBirth = ""

  export let onClickNext: () => void
</script>
<LayoutBase titleCaption="ข้อมูลบัตรประชาชน"
            footerPrimaryBtnText="ถัดไป"
            onPrimaryBtnClick={onClickNext}>
    <InputField label="เลขบัตรประชาชน" bind:value={idCardNumber}/>
    <InputField label="ชื่อ" bind:value={familyName}/>
    <InputField label="นามสกุล" bind:value={surname}/>

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

</LayoutBase>
