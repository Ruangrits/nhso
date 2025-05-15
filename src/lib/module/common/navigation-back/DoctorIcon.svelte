<script lang="ts">
    import {
        Layout,
    } from '@bull-shark/tdh-lib-mason'
    import imgDoctor from "../images/doctor-consult-heart.png"
    export let sizeClass: string = "w-[320px] sm:w-[380px] md:w-[440px] lg:w-[480px]"
    export let custom: string = ""
</script>


<div class="flex justify-center">
    <img class={`${sizeClass} ${custom}`} src={imgDoctor} alt="" />
</div>


