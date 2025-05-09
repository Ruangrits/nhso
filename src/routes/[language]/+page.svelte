<script lang="ts">
  import {goto} from "$app/navigation"
  import {page} from "$app/state"
  import {AppContext} from "$lib/app/app-context"

  const appContext =  AppContext.get()
  const navCtrl = appContext.navCtrl

  goto(navCtrl.page().idCardScanner.guid)
</script>
