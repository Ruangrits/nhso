<script lang="ts">
  import {Card, GapSize, Text, TextAlign, TextStyle, TextWhitespace, VBox,} from '@bull-shark/tdh-lib-mason'
  import BaseBackground from "$lib/module/common/BaseBackground.svelte"
  import doctorIcon from "../../common/images/doctor-consult.png"
  import type {QueuingDictionary} from "$lib/core/l10n/queuing"

  export let captions: QueuingDictionary

</script>
<BaseBackground>
    <VBox custom="w-full h-full px-4 py-6 items-center text-center ">
        <Card custom="relative pb-2 px-4 items-center text-center">
            <img src={doctorIcon} class="w-[246px] h-[225px] absolute z-10 -top-[100px]">
            <VBox custom="mt-12" gapSize={GapSize['20px']}>
                <Text style={TextStyle.H1} align={TextAlign.Center} whitespace={TextWhitespace.PreWrap}
                      custom="!text-2xl !font-bold mt-16">
                    {@html captions.waitingMeetDoctor.title}
                </Text>
                <Text style={TextStyle.Body1} align={TextAlign.Center} whitespace={TextWhitespace.PreWrap}
                      custom="mb-4">
                    {@html captions.waitingMeetDoctor.subtitle}
                </Text>
            </VBox>
        </Card>
    </VBox>
</BaseBackground>
