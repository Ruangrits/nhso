<script lang="ts">
  import {
    VBox,
    Text,
    Button,
    HorizontalAlign,
    Spacer,
    SpacerStyle,
    GapSize,
    TextStyle
  } from '@bull-shark/tdh-lib-mason'
  import BaseBackground from "$lib/module/common/BaseBackground.svelte"
  import doctor from "../../common/images/doctor.png"
  import type {QueuingDictionary} from "$lib/core/l10n/queuing"

  export let captions: QueuingDictionary
</script>

<BaseBackground>
    <VBox custom="h-full w-full" horizontalAlign={HorizontalAlign.Center}>
        <img class="border-2 border-grey-300 rounded-full h-32 w-32" src={doctor}>
        <Spacer spaceStyle={SpacerStyle.small}/>
        <VBox custom="w-full" horizontalAlign={HorizontalAlign.Center} gapSize={GapSize['20px']}>
            <Text style={TextStyle.H2} custom="!text-3xl">นพ.ปิยกร อนุชา</Text>
            <Text custom="!font-medium !text-xl">{@html captions.queueConfirmation.desc}</Text>
        </VBox>
        <Spacer spaceStyle={SpacerStyle.large}/>
        <Spacer/>
        <Button>
            <Text>{captions.queueConfirmation.btnNavigateToMeet}</Text>
        </Button>
    </VBox>
</BaseBackground>
