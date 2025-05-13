<script lang="ts">
  import Guide from "$lib/module/selfie/view/Guide.svelte"
  import {goto} from "$app/navigation"
  import {AppContext} from "$lib/app/app-context"

  const appContext = AppContext.get()
  const captions = appContext.translation.selfie
  const navCtrl = appContext.navCtrl


</script>

<Guide onClickNext={() => goto(navCtrl.page().selfie.scan)} {captions}/>
