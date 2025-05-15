<script lang="ts">
  import {
    VBox,
    Card,
    Text,
    TextStyle,
    HorizontalAlign,
    TextAlign,
    GapSize,
  } from '@bull-shark/tdh-lib-mason'

  import doctorConsult from "./images/doctor-consult.png"
</script>


<CheckingBackground>
    <VBox custom="relative w-full h-full p-4">
        <img class="absolute top-40 left-40 h-[80px] w-[100px]" src={doctorConsult}>
        <Card custom="w-full py-8">

        </Card>
    </VBox>
</CheckingBackground>
