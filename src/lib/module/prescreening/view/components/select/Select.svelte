<script lang="ts">
  import {
    IconName,
    TopNavBar,
    Layout,
    ActionModal,
    ButtonStyle,
    ButtonVariant,
    Card,
    HBox,
    VBox,
    TextLabel,
  } from '@bull-shark/tdh-lib-mason'

  export let label: string
  // MutualState
  export let required: boolean = false
  export let placeholder: string
  export let value: string
  export let id: string
  export let data
  export let disabled: boolean = false

  export let custom: string = ''

</script>
<VBox custom={`w-full ${custom}`} {...$$restProps}>
    {#if label}
        <TextLabel forId={id}
                   {label}
                   {required}/>
    {/if}
    <select
            bind:value
            {id}
            {data}
            {disabled}
            class="select w-full py-3 text-base font-normal border-grey-200 focus:border-primary-300 focus:outline-none"
    >
        <option value="" class="" disabled selected>{placeholder}</option>
        {#each data as data}
            <option value={data.id} class="">{data.name}</option>
        {/each}
    </select>
</VBox>
