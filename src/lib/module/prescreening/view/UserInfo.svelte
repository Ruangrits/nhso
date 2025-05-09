<script lang="ts">
  import {HBox, InputField, Text, TextAlign, TextColor, TextStyle, VBox} from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import {goto} from "$app/navigation"
  import Select from "$lib/module/prescreening/view/components/select/SelectBGNone.svelte"
  import {Language} from "$lib/core/l10n/index.js"
  import {monthEN, monthTH} from "$lib/module/prescreening/data/month"

  export let dateOfBirth: string
  export let monthOfBirth: string
  export let yearOfBirth: string
  export let language: Language = Language.EN
  export const month = [
    {"id": "01", "code": "Jan", "name": "มกราคม"},
    {"id": "02", "code": "Feb", "name": "กุมภาพันธ์"},
    {"id": "03", "code": "Mar", "name": "มีนาคม"},
    {"id": "04", "code": "Apr", "name": "เมษายน"},
    {"id": "05", "code": "May", "name": "พฤษภาคม"},
    {"id": "06", "code": "Jun", "name": "มิถุนายน"},
    {"id": "07", "code": "Jul", "name": "กรกฎาคม"},
    {"id": "08", "code": "Aug", "name": "สิงหาคม"},
    {"id": "09", "code": "Sep", "name": "กันยายน"},
    {"id": "10", "code": "Oct", "name": "ตุลาคม"},
    {"id": "11", "code": "Nov", "name": "พฤศจิกายน"},
    {"id": "12", "code": "Dec", "name": "ธันวาคม"},
  ]

  let days = generateArrayOfDays()
  let months = generateArrayOfMonths()
  const years = generateArrayOfYears()

  $: yearOfBirth ? months = generateArrayOfMonths() : ''
  $: monthOfBirth ? days = generateArrayOfDays() : ''

  function generateArrayOfMonths() {
    const currentYear = new Date().getFullYear() + 543
    if (yearOfBirth < currentYear - 10) {
      return language == Language.EN ? monthEN : monthTH
    } else {
      const currentMonth = new Date().getMonth()
      return language == Language.EN ? monthEN.slice(0, currentMonth + 1) : monthTH.slice(0, currentMonth + 1)
    }
  }

  function generateArrayOfDays() {
    let dayCount = new Date(parseInt(yearOfBirth) - 543, parseInt(monthOfBirth), 0).getDate()
    let today = new Date().getDate()
    let thisMonth = "0" + (new Date().getMonth() + 1)
    let days = []
    const currentYear = new Date().getFullYear()

    if (parseInt(yearOfBirth) - 543 == currentYear - 10 && monthOfBirth == thisMonth) {
      addDays(today)
    } else {
      addDays(dayCount)
    }

    function addDays(_dayCount) {
      for (let i = 1; i <= _dayCount; i++) {
        if (i.toString().length == 1) {
          let isSingleNumber = "0" + i
          days.push({id: isSingleNumber, name: isSingleNumber})
        } else {
          days.push({id: i.toString(), name: i.toString()})
        }
      }
    }
    return days
  }

  function generateArrayOfYears() {
    let max = new Date().getFullYear()
    let min = max - 55
    let years = []

    for (let i = max - 10; i >= min; i--) {
      const be = i + 543
      years.push({id: be.toString(), name: be.toString()})
    }
    return years
  }
</script>

<LayoutBase numberOfPages={[1,2,3]} currentPage={2} onClickNext={() => goto('/th/prescreen/address')}>
    <VBox>
        <Text color={TextColor.Grey500} style={TextStyle.H4} align={TextAlign.Center}>
            <HBox>วันเดือนปีเกิด<p class="text-red-600">*</p></HBox>
        </Text>
        <div class="grid grid-cols-3 gap-2">
            <Select
                    bind:value={yearOfBirth}
                    data={years}
                    id="yearOfBirth"
                    placeholder="ปี"
            />
            <Select
                    bind:value={monthOfBirth}
                    disabled={!yearOfBirth}
                    data={months}
                    id="monthOfBirth"
                    placeholder="เดือน"
            />
            <Select
                    bind:value={dateOfBirth}
                    disabled={!monthOfBirth}
                    data={days}
                    id="dateOfBirth"
                    placeholder="วัน"
            />
        </div>
        <InputField label="ส่วนสูง" unit="cm" required/>
        <InputField label="น้ำหนัก" unit="kg" required/>
        <InputField label="โรคประจำตัว (ถ้ามี)" placeholder="โปรดระบุโรคประจำตัว (ถ้ามี)"/>
        <InputField label="ประวัติการแพ้ยา (ถ้ามี)" placeholder="โประระบุประวัติการแพ้ยา (ถ้ามี)"/>
    </VBox>
</LayoutBase>
