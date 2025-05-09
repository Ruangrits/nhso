<script lang="ts">
  import IdForm from "$lib/module/id-card-scanner/view/Form.svelte"
  import {goto} from "$app/navigation"


  function onClickNext() {
    goto('/th/prescreen/symptoms-form')
  }

</script>

<IdForm {onClickNext}/>
