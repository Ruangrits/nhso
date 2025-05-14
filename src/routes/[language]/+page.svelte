<script lang="ts">
  import {goto} from "$app/navigation"
  import {page} from "$app/state"
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
    HorizontalAlign
  } from '@bull-shark/tdh-lib-mason'
  import {AppContext} from "$lib/app/app-context"

  const appContext = AppContext.get()
  const navCtrl = appContext.navCtrl

  import landingChecking from "./landing-checking.png"
  import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte"

  setTimeout(() => {
  goto(navCtrl.page().idCardScanner.guid)
  },2500)
</script>
<Layout.Base>
    <div class="relative h-full w-full">
        <img class="-z-50 absolute h-full w-full object-fill" src={landingChecking}>
        <VBox custom="w-full h-full" horizontalAlign={HorizontalAlign.Center}>
            <LoadingSpin customs="mt-[65%]"/>
        </VBox>
    </div>
</Layout.Base>
