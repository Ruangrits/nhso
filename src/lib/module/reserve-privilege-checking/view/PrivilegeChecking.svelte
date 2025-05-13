<script lang="ts">
  import {GapSize, HorizontalAlign, Text, TextAlign, TextStyle, VBox,} from '@bull-shark/tdh-lib-mason'
  import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte"
  import LayoutBase from "$lib/module/reserve-privilege-checking/view/LayoutBase.svelte"

  export let captions
</script>

<LayoutBase>
    <VBox custom="w-full h-full"
          gapSize={GapSize['24px']}
          horizontalAlign={HorizontalAlign.Center}>
        <LoadingSpin/>
        <Text style={TextStyle.H2} align={TextAlign.Center}>ระบบกำลังทำการ ตรวจสอบสิทธิ์ของท่าน</Text>
        <Text style={TextStyle.Body1} align={TextAlign.Center}>ทางระบบจะทำการจะส่งแจ้งเตือนไปยัง
            ลูกค้าเมื่อได้ทำการเช็คสิทธิ์เรียบร้อย
        </Text>
    </VBox>
</LayoutBase>
