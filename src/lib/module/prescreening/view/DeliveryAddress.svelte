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
    WarnModal,
    ButtonSize,
    BoxItemSpread,
    IconSize,
    Icon,
    IconStyle
  } from '@bull-shark/tdh-lib-mason'
  import {goto} from "$app/navigation"
  import {page} from "$app/state"
  import LayoutBase from "$lib/module/prescreening/view/components/LayoutBase.svelte"
  import MapPin from "$lib/module/prescreening/view/components/MapPin.svelte"

  export let onAddLocationForm: () => {}
  let activeDropdown = true
</script>


<LayoutBase numberOfPages={[1,2,3]} currentPage={3}
            onClickNext={() => goto(`/${page.params.language}/selfie`)}>
    <Text color={TextColor.Grey500} style={TextStyle.Subtitle1} align={TextAlign.Center}>
        <HBox>
            <Text style={TextStyle.H4}>สถานที่อยู่จัดส่ง</Text>
            <p class="text-red-600">*</p></HBox>
    </Text>

    <VBox custom="w-full" gapSize={GapSize['0px']}>
        <button id="location-dropdown"
                class="w-full border border-grey-200 p-3 {activeDropdown ? 'rounded-t-lg border-primary-300' : 'rounded-lg'}"
                on:click={() => {
				if (false) {
					activeDropdown = false
				} else {
					activeDropdown = !activeDropdown
				}
			}}>

            <!--            <HBox verticalAlign={VerticalAlign.Top}>-->
            <!--                <VBox custom="w-full">-->
            <!--                    <Text>addressName</Text>-->
            <!--                    <VBox gapSize={GapSize['0px']}>-->
            <!--                        <Text style={TextStyle.Small2}>address</Text>-->
            <!--                        <Text style={TextStyle.Small2}>subDistrict</Text>-->
            <!--                        <Text style={TextStyle.Small2}>district</Text>-->
            <!--                        <Text style={TextStyle.Small2}>province</Text>-->
            <!--                    </VBox>-->
            <!--                </VBox>-->
            <!--                <Button style={ButtonStyle.Tertiary} size={ButtonSize.DoubleSuperExtraSmall}>-->
            <!--                    <Text style={TextStyle.H4}>ลบ</Text>-->
            <!--                </Button>-->
            <!--            </HBox>-->

            <HBox itemSpread={BoxItemSpread.EqualSpaceBetweenItems}>
                <Text style={TextStyle.Body2} color={TextColor.Grey300}>โปรดเลือกสถานที่อยู่จัดส่ง</Text>
                <Icon name={IconName.KeyboardArrowDown}
                      style={IconStyle.Sharp}
                      size={IconSize.md24}
                      custom={activeDropdown
							? 'rotate-180 transition-transform duration-700'
							: 'transition-transform duration-500'}>
                </Icon>
            </HBox>
        </button>

        <VBox verticalAlign={VerticalAlign.Top} gapSize={GapSize['0px']}
              custom="h-[calc(100dvh-300px)] w-full overflow-y-auto {!activeDropdown ? 'hidden' : 'animate-fade-in'}">
            {#each Array(4) as data, index}
                <button class="w-full border border-primary-300 border-t-0">
                    <HBox custom="w-full p-3" verticalAlign={VerticalAlign.Top}>
                        <MapPin iconColor="#6FC3C4"/>
                        <VBox custom="w-full" gapSize={GapSize['4px']}>
                            <Text style={TextStyle.Subtitle2}>บ้าน</Text>
                            <Text style={TextStyle.Small2}
                                  color={TextColor.Grey300}
                                  custom="line-clamp-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                amet dolor expedita, fugit itaque, laborum maxime minima nostrum possimus, quibusdam
                                reiciendis suscipit veritatis voluptatum? Expedita neque nulla similique tempora velit.
                            </Text>
                        </VBox>
                    </HBox>
                </button>
            {/each}
            <button class="w-full border border-primary-300 border-t-0 rounded-b-lg" on:click={onAddLocationForm}>
                <HBox custom="p-3">
                    <Icon name={IconName.Add}
                          style={IconStyle.Sharp}
                          size={IconSize.md18}
                          color={TextColor.Primary300}/>
                    <Text style={TextStyle.Body2} color={TextColor.Primary300}>เพิ่มสถานที่อยู่จัดส่ง</Text>
                </HBox>
            </button>
        </VBox>
    </VBox>
</LayoutBase>
