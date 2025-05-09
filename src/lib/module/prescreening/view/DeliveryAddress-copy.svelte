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
    GapSize,
    Text,
    TextAlign,
    TextColor,
    TextStyle,
    VerticalAlign,
    HorizontalAlign,
    StickyBottomBar,
    Button,
    Width,
    WarnModal
  } from '@bull-shark/tdh-lib-mason'

  let temp_data
  let showLocationForm = false
  let activeDropdown = false
  let isSelectedAddress = false


  function handleAddressSelection(data: Location) {
    isSelectedAddress = isSelectedAddress == false ? true : true
    temp_data = data
    activeDropdown = activeDropdown == false ? true : false
  }

  function handleUnselectedAddress() {
    isSelectedAddress = false
    temp_data = null
  }

  function addNewAddress(event) {
  }
</script>

<div class="w-full h-auto flex flex-col">
    <div class="w-full flex-none">
        <button
                id="location-dropdown"
                on:click={() => {
				if (isSelectedAddress) {
					activeDropdown = false
				} else {
					activeDropdown = activeDropdown ? false : true
				}
			}}
                class="w-full flex flex-row justify-between items-center border border-grey-200 p-3
			{isSelectedAddress ? 'h-auto' : 'h-12'} {activeDropdown
				? 'rounded-t-lg border-primary'
				: 'rounded-lg'} }">
            {#if isSelectedAddress}
                {#each Array(4) as address}
                    {#if address == temp_data}
                        <div class="w-full h-auto flex">
                            <div class="w-full flex flex-col text-left">
                                <Text>addressName</Text>
                                <Text>address</Text>
                                <Text>subDistrict</Text>
                                <Text>district</Text>
                                <Text>province</Text>
                            </div>

                            <button class="flex" on:click={handleUnselectedAddress}>
                                <Text>deleteBtn</Text>
                            </button>
                        </div>
                    {/if}
                {/each}
            {:else}
                <div class="flex w-full justify-between items-center text-gray-300">
                    <Text>appointmentViewAddressPlaceholder</Text>
                    <span class={activeDropdown
							? 'rotate-180 transition-transform duration-700'
							: 'transition-transform duration-500'}>
<!--						<CaretDown iconColor="#CECECE"/>-->
					</span>
                </div>
            {/if}
        </button>

        <div class="w-full p-0 {!activeDropdown ? 'hidden' : 'animate-fade-in'}">
            {#each Array(3) as data, index}
                {#if data != temp_data}
                    <button
                            id={`location-data-${index}`}
                            on:click={() => {
							handleAddressSelection(data)
						}}
                            class="h-auto w-full py-3 grid grid-cols-10 items-center border border-primary border-t-0"
                    >
                        <div class="col-span-1 flex justify-center items-center">
                            MapPin
<!--                            <MapPin iconColor="#6FC3C4"/>-->
                        </div>
                        <div class="col-span-9 flex h-5 pt-1 items-center">
                                <Text>
                                    addressName
                                </Text>
                        </div>
                    </button>
                {/if}
            {/each}
            <button
                    on:click={() => (showLocationForm = true)}
                    class="h-auto w-full py-3 grid grid-cols-10 items-center border border-primary border-t-0 rounded-b-lg"
            >
                <div class="col-span-1 flex justify-center items-center">
                    Plus
                </div>
                <div class="col-span-9 flex pt-1 items-center">
                    <Text>
                        appointmentViewAddLocationTitle
                    </Text>
                </div>
            </button>
        </div>
    </div>
</div>

<!--<AddLocationForm on:addLocation={addNewAddress} bind:showModal={showLocationForm}/>-->
