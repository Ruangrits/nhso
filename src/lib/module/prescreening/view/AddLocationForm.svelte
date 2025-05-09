<script lang="ts">
  import {
    IconName,
    TopNavBar,
    Layout,
    ActionModal,
    ButtonStyle,
    ButtonVariant,
    Card,
    HBox,
    VBox,
    GapSize,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VerticalAlign,
    HorizontalAlign,
    StickyBottomBar,
    Button,
    Width,
    InputField
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import {goto} from "$app/navigation"
  import {page} from "$app/state"
  import Select from "$lib/module/prescreening/view/components/select/Select.svelte"
  import {districts, provinces, subDistricts} from "$lib/module/prescreening/data/address.js"

  export let id: string = ''
  export let isDialogVisible: boolean
  let provinceCode: { id: string; code: string; name: string } | undefined
  let districtCode: { id: string; code: string; name: string; provinceCode: string } | undefined

  let province: string
  let district: string
  let subDistrict: string

  $: filteredDistricts(province)
  $: filteredSubDistricts(district)

  function filteredDistricts(value: string) {
    provinceCode = provinces.find((data) => data.name === value)
    district = ""
  }

  function filteredSubDistricts(value: string) {
    districtCode = districts.find((data) => data.name === value)
    subDistrict = ""
  }

  let dialog: HTMLDialogElement
  $: if (dialog != undefined) {
    if (isDialogVisible) dialog.showModal()
    else dialog.close()
  }
</script>

<div class={`fixed inset-y-0 inset-x-0 h-full ${isDialogVisible ? 'backdrop-brightness-75' : 'hidden'}`}></div>
<dialog {id} class="m-0 h-full w-full outline-0" bind:this={dialog}>
    <TopNavBar id="top-nav-bar"
               title="เพิ่มที่อยู่จัดส่ง"
               leftIconName={IconName.West}
               onLeftIconClick={() => {isDialogVisible = false}}/>

    <VBox custom="w-full h-[calc(100dvh-154px)]] p-4 overflow-hidden" verticalAlign={VerticalAlign.Top}>
        <InputField label="ตั้งชื่อสถานที่" required/>
        <Select
                bind:value={province}
                label="จังหวัด"
                data={provinces}
                id="province"
                placeholder={"เลือกจังหวัด"}
                required
        />
        <Select
                bind:value={district}
                label="เขต/อำเภอ"
                data={districts.filter((dis) => dis.provinceCode === provinceCode?.code)}
                id="district"
                placeholder={"เลือกเขต/อำเภอ"}
                required
        />
        <Select
                bind:value={subDistrict}
                label="แขวง/ตำบล"
                data={subDistricts.filter((subDist) => subDist.districtCode === districtCode?.code)}
                id="subDistrict"
                placeholder={"เลือกแขวง/ตำบล"}
                required
        />
        <InputField label="ที่อยู่" required/>
    </VBox>
    <Layout.Bottom>
        <VBox>
            <Button custom="{Width.Full}" on:click={() => history.back()}>
                <Text>ถัดไป</Text>
            </Button>
        </VBox>
    </Layout.Bottom>
</dialog>

<style>
    dialog:modal {
        max-width: 100%;
        max-height: 100%;
    }
</style>
