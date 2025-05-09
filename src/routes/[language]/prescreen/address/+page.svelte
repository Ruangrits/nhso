<script lang="ts">

  import AddLocationForm from "$lib/module/prescreening/view/AddLocationForm.svelte"
  import DeliveryAddress from "$lib/module/prescreening/view/DeliveryAddress.svelte"

  let isAddLocationVisible: boolean = false
  function onAddLocationForm() {
    isAddLocationVisible = true
  }
</script>
<AddLocationForm bind:isDialogVisible={isAddLocationVisible}/>
<DeliveryAddress {onAddLocationForm}/>


