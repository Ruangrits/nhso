<script lang="ts">
  import Guide from "$lib/module/id-card-scanner/view/Guide.svelte"
  import {goto} from "$app/navigation"
</script>
<Guide onClickNext={() => goto('/th/id-card-scanner/scan')}/>




