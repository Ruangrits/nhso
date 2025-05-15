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

  export let titleCaption: string = ""
  export let isNeedStickyBottomBar: boolean = true
  export let footerPrimaryBtnText: string | null = null
  export let footerSecondaryBtnText: string | null = null
  export let onPrimaryBtnClick: () => void
  export let onSecondaryBtnClick: () => void
</script>
<Layout.Base>
    <Layout.Body>
        <VBox custom="h-full w-full px-4" verticalAlign={VerticalAlign.Top} gapSize={GapSize['18px']}>
            <Text color={TextColor.Grey500} style={TextStyle.H2} align={TextAlign.Center}
                  custom="w-full py-2 pt-6 font-semibold">
                {titleCaption}
            </Text>
            <slot/>
        </VBox>
    </Layout.Body>
    {#if isNeedStickyBottomBar}
        <StickyBottomBar isDropShadow={false} isVisibleBorder={false}>
            <VBox>
                {#if footerSecondaryBtnText}
                    <Button custom="{Width.Full}"
                            style={ButtonStyle.Secondary}
                            on:click={onSecondaryBtnClick}>
                        <Text>{footerSecondaryBtnText}</Text>
                    </Button>
                {/if}
                {#if footerPrimaryBtnText}
                    <Button custom="{Width.Full}" on:click={onPrimaryBtnClick}>
                        <Text>{footerPrimaryBtnText}</Text>
                    </Button>
                {/if}
            </VBox>
        </StickyBottomBar>
    {/if}
</Layout.Base>
