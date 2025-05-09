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
    Width
  } from '@bull-shark/tdh-lib-mason'
  import LayoutBase from "$lib/module/id-card-scanner/view/components/LayoutBase.svelte"
  import thaiNationId from "../thai-nation-id-card.png"

  export let onClickNext: () => void

  const instructions = `
  <h2>ขั้นตอนการสแกนบัตรประชาชน</h2>
  <ul>
    <br>
      <li>  - วางบัตรประชาชนบนพื้นผิวเรียบที่มีสีตัดกับสีของบัตร เช่น พื้นสีขาวหรือดำ</li>
      <br>
      <li>  - จัดบัตรประชาชนให้อยู่ในกรอบที่ปรากฏบนหน้าจอโทรศัพท์จนเต็ม โดยให้ขอบของบัตรพอดีกับขอบของกรอบ</li><br>
      <li>  - ตรวจสอบให้แน่ใจว่าไม่มีเงาตกทับบนบัตร และข้อมูลบนบัตรชัดเจน</li><br>
      <li>  - หามุมหารถ่ายที่มีแสงสว่างเพียงพอเพื่อให้เห็นข้อมูลบนบัตรได้ชัดเจน</li><br>
      <li>  - โปรดระมัดระวังนิ้วหรือสิ่งของที่อาจบังข้อมูลบนบัตรประชาชน</li><br>
      <li>  - แสงสะท้อนจากบัตรอาจทำให้การตรวจสอบข้อมูลยากขึ้น</li><br>
  </ul>
`
</script>
<LayoutBase titleCaption="ขั้นตอนการสแกนบัตรประชาชน"
            footerPrimaryBtnText="ถัดไป"
            onPrimaryBtnClick={onClickNext}>
<!--    <Card custom="h-[30%] w-full" padding="p-0">-->
        <img src={thaiNationId}/>
<!--    </Card>-->
    <VBox verticalAlign={VerticalAlign.Top}>
        <Text color={TextColor.Grey500} style={TextStyle.Body2}>{@html instructions} </Text>
    </VBox>
</LayoutBase>
