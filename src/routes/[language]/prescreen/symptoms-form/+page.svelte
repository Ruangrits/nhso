<script lang="ts">
  import SymptomSelectionForm from "$lib/module/prescreening/view/SymptomSelectionForm.svelte"
  import {AppContext} from "$lib/app/app-context"
  import {goto} from "$app/navigation"

  const appContext = AppContext.get()
  const captions = appContext.translation.preScreen
  const navCtrl = appContext.navCtrl
</script>

<SymptomSelectionForm {captions} onClickNext={() => goto(navCtrl.page().preScreen.userInfo)}/>
