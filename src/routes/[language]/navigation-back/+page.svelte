<script lang="ts">
    import {
        HBox,
        InputField,
        Text,
        TextAlign,
        TextColor,
        TextStyle,
        VBox,
        BoxItemSpread,
        GapSize,
        Layout,
        HorizontalAlign, TextSpacing, TextWhitespace, Button, Card,
    } from '@bull-shark/tdh-lib-mason'
    import {goto} from "$app/navigation"
    import DoctorIcon from "$lib/module/navigation-back/view/DoctorIcon.svelte";
    import ExplainBackToNHSO from "$lib/module/navigation-back/view/ExplainBackToNHSO.svelte";
    import {AppContext} from "$lib/app/app-context"
    import BaseBackground from "$lib/module/common/BaseBackground.svelte";

    const appContext = AppContext.get()
    const captions = appContext.translation.navigateBack

</script>
<BaseBackground>
    <VBox custom="w-full h-full px-4 py-6 items-center text-center">

        <DoctorIcon sizeClass="w-[300px] md:w-[400px] lg:w-[480px]" custom="-mb-[140px] z-10 relative"/>

        <Card custom="pt-[100px] pb-2 px-4 items-center text-center">
            <Text style={TextStyle.H1} align={TextAlign.Center} whitespace={TextWhitespace.PreWrap}
                  custom="!text-2xl !font-bold mt-12">
                {captions.navigateBackNhso.title}
            </Text>
            <Text custom="text-sm mt-2 font-semibold" whitespace={TextWhitespace.PreWrap} align={TextAlign.Center}>
                {captions.navigateBackNhso.desc}
            </Text>

            <ExplainBackToNHSO custom="mt-6"/>

            <Button custom="bg-primary-100 text-white mt-4 w-full max-w-[280px] mb-2" on:click={() => goto('/')}>
                {captions.navigateBackNhso.btn}
            </Button>
        </Card>
    </VBox>
</BaseBackground>