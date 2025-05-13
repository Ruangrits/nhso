<script lang="ts">
  import {
    Layout,
  } from '@bull-shark/tdh-lib-mason'
  import checkingBackground from "./images/background.png"
</script>

<Layout.Base>
    <div class="relative h-full w-full">
        <img class="-z-50 absolute h-full w-full object-fill" src={checkingBackground}>
        <slot class="z-10"/>
    </div>
</Layout.Base>
