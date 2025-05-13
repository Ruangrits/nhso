<script lang="ts">
  import {
    InputField
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"

  export let onClickNext: () => void
</script>
<LayoutBase titleCaption="ข้อมูลบัตรประชาชน"
            footerPrimaryBtnText="ถัดไป"
            onPrimaryBtnClick={onClickNext}>
    <InputField label="เลขบัตรประชาชน"/>
    <InputField label="ชื่อ"/>
    <InputField label="นามสกุล"/>
</LayoutBase>
