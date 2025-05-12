<script lang="ts">
  import UserInfo from "$lib/module/prescreening/view/UserInfo.svelte"
  import {AppContext} from "$lib/app/app-context"
  import {goto} from "$app/navigation"

  const appContext = AppContext.get()
  const captions = appContext.translation.preScreen
  const navCtrl = appContext.navCtrl
</script>

<UserInfo {captions} onClickNext={() => goto(navCtrl.page().preScreen.address)}/>
