<script lang="ts">
  import {
    HBox,
    InputField,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VBox
  } from '@bull-shark/tdh-lib-mason'

  export let value: string
  export let group: any
  export let label: string
  export let custom: string
</script>

<HBox {custom}>
    <input type="radio"
           bind:group
           {value}
           class="radio border-gray-400 checked:bg-primary-300 checked:text-primary-300 checked:border-primary-300"/>
    <Text>{label}</Text>
</HBox>
