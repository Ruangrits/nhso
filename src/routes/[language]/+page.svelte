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
      HorizontalAlign, TextSpacing, TextWhitespace
  } from '@bull-shark/tdh-lib-mason'
  import {AppContext} from "$lib/app/app-context"

  import type {PreScreenDictionary} from "$lib/core/l10n/prescreen"

  const appContext = AppContext.get()
  const navCtrl = appContext.navCtrl
  const captions = appContext.translation.welcomeNhso
  import landingChecking from "./landing-checking.png"
  import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte"
  import BaseBackground from "$lib/module/common/BaseBackground.svelte";
  import MordeeAndNhsoimg from "$lib/module/common/MordeeAndNhsoimg.svelte";

  // setTimeout(() => {
  // goto(navCtrl.page().idCardScanner.guid)
  // },2500)
</script>
<BaseBackground>
                <VBox custom="w-full h-full pt-12 sm:pt-24 md:pt-36 min-h-[100px] " horizontalAlign={HorizontalAlign.Center}>
                    <MordeeAndNhsoimg/>
                    <Text  whitespace={TextWhitespace.PreWrap} align={TextAlign.Center} custom="!leading-normal !text-4xl !font-bold" >{captions.welcomeNhso.title}</Text>
                    <Text custom="!text-2xl !leading-normal" whitespace={TextWhitespace.PreWrap} align={TextAlign.Center}>{captions.welcomeNhso.desc}</Text>

                    <LoadingSpin customs="mt-[10%]"/>
                </VBox>
</BaseBackground>


