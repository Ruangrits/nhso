<script lang="ts">
  import Guide from "$lib/module/id-card-scanner/view/Guide.svelte"
  import {goto} from "$app/navigation"
  import {AppContext} from "$lib/app/app-context"

  const appContext = AppContext.get()
  const captions = appContext.translation.idCardScanner
  const navCtrl = appContext.navCtrl
</script>

<Guide onTopBarIconLeft={() => navCtrl.exit()} onClickNext={() => goto(navCtrl.page().idCardScanner.scan)} {captions}/>
