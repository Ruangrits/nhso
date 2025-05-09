<script lang="ts">
  import {
    VBox,
    HBox,
    Text,
    TextColor,
    TextStyle,
    TextAlign,
    VerticalAlign
  } from '@bull-shark/tdh-lib-mason'

  export let numberOfPages: Array<number>
  export let currentPage: number

</script>
<HBox custom="w-full">
    {#each numberOfPages as page}
        <div class="p-0.5 w-full h-1.5 rounded {currentPage === page ? 'bg-primary-300':'bg-grey-200'}"></div>
    {/each}
</HBox>
