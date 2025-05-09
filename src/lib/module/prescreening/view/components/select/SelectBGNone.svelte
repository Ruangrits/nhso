<script lang="ts">

  import {Language} from "$lib/core/l10n"

  export let value: string
  export let placeholder: string
  export let id
  export let data
  export let disabled: boolean = false


  $: reactiveValidateInput(value)

  function reactiveValidateInput(value: string) {

  }
</script>


<select bind:value {id} {data} {disabled}
        class="select h-[36px] min-h-[36px] w-full rounded-none font-normal border-b-2 border-b-grey-300 focus:outline-none">
    <option value="" disabled selected>{placeholder}</option>
    {#each data as data}
        <option value={data.id}>{data.name}</option>
    {/each}
</select>

<style>

    select:focus {
        border-bottom: 2px solid var(--primary); /* สีแดงเมื่อมีการ focus */
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
    }
</style>
