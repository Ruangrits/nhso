<script lang="ts">
    import {
        Layout,
    } from '@bull-shark/tdh-lib-mason'
    import imgTellUserButton from "../../common/images/TellUserButtonNSHO.svg"
    export let sizeClass: string = "w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px]"
    export let custom: string = ""
</script>


<div class="flex justify-center">
    <img class={`${sizeClass} ${custom}`} src={imgTellUserButton} alt="" />
</div>


