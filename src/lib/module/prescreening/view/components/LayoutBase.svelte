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
    Width
  } from '@bull-shark/tdh-lib-mason'
  import StagesWizzard from "$lib/module/prescreening/view/components/StagesWizzard.svelte"

  export let numberOfPages: Array<number>
  export let currentPage: number
  export let uiCaption: string = "uiCaption"
  export let title: string = "title"
  export let topNavBarLeftIconName: IconName = IconName.West

  export let onClickNext: () => void
</script>

<Layout.Base>
    <TopNavBar id="top-nav-bar"
               title="Information"
               leftIconName={topNavBarLeftIconName}
               onLeftIconClick={() => {history.back()}}/>
    <Layout.Body>
        <VBox custom="p-4 h-full w-full overflow-hidden" verticalAlign={VerticalAlign.Top}
              gapSize={GapSize['16px']}>
            <StagesWizzard {numberOfPages} {currentPage} {uiCaption}/>
            <slot/>
        </VBox>
    </Layout.Body>

    <Layout.Bottom>
        <VBox>
            <Button custom="{Width.Full}" on:click={onClickNext}>
                <Text>ถัดไป</Text>
            </Button>
        </VBox>
    </Layout.Bottom>
</Layout.Base>
