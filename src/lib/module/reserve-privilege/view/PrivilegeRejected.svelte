<script lang="ts">
  import {
    VBox,
    Card,
    Text,
    TextStyle,
    HorizontalAlign,
    TextAlign,
    GapSize,
    Icon,
    IconName,
    IconStyle,
    IconSize,
    TextColor
  } from '@bull-shark/tdh-lib-mason'
  import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte"
  import LayoutBase from "$lib/module/reserve-privilege/view/LayoutBase.svelte"
</script>
<LayoutBase>
    <VBox custom="w-full h-full"
          gapSize={GapSize['16px']}
          horizontalAlign={HorizontalAlign.Center}>
        <Icon
                name={IconName.Info}
                style={IconStyle.Normal}
                size={IconSize.md52}
                color={TextColor.Warning200}
                custom="m-1.5"
        />

        <Text style={TextStyle.H2} align={TextAlign.Center}>ขออภัย!สิทธิของท่านไม่ตรงตาม
            เงื่อนไขที่กำหนด
        </Text>
        <Text style={TextStyle.Subtitle1} align={TextAlign.Center}>กรุณาตรวจสอบสิทธิของท่านอีกครั้ง</Text>
    </VBox>
</LayoutBase>
