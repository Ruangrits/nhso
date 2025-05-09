<script lang="ts">
  import {
    Layout,
    Card,
    TopNavBar,
    IconName,
    HorizontalAlign,
    StickyBottomBar,
    Button,
    Width,
    VBox,
    Text,
    VerticalAlign,
    TextColor,
    TextStyle,
    TextAlign
  } from '@bull-shark/tdh-lib-mason'
  import {onDestroy, onMount} from "svelte"
  import {PhotoBooth} from "$lib/camera/photobooth"
  import {CameraMode} from "$lib/camera/types"
  import LayoutBase from "$lib/module/id-card-scanner/view/components/LayoutBase.svelte"

  export let onClickNext: () => void
  export let onSnapShot: (imageScanned: string) => void

  let imagePreview = null
  onMount(() => {
    setTimeout(() => {
      PhotoBooth.init(CameraMode.Environment)
    }, 200)
  })

  function snapShot() {
    setTimeout(() => {
      let elementImg = document.getElementsByTagName('img')
        onSnapShot(elementImg[elementImg.length - 1].src)
        onClickNext()
    }, 0)
  }

  onDestroy(() => {
    PhotoBooth.destroy()
  })
</script>
<LayoutBase titleCaption="สแกนบัตรประชาชน"
            isNeedStickyBottomBar={false}
            onClickNext={onClickNext}>
    <VBox custom="relative h-full pb-6 w-full">
        <video class=" w-full object-cover rounded-lg"></video>
        <VBox custom="absolute inset-x-0 top-0 w-full h-[97%]" horizontalAlign={HorizontalAlign.Center}>
            <Card custom="h-[50%] w-[95%]" rounded="rounded-lg" padding="p-0" bgColor="bg-transparent">
                <VBox custom="h-full w-full" horizontalAlign={HorizontalAlign.Center}>
                    <Text>ID Card</Text>
                </VBox>
            </Card>
        </VBox>
        <div id="stack-photo" class="hidden"></div>
        <button name="take_photo" id="take_photo" on:click={snapShot} class="absolute inset-x-0 bottom-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M68 36C68 53.6731 53.6731 68 36 68C18.3269 68 4 53.6731 4 36C4 18.3269 18.3269 4 36 4C53.6731 4 68 18.3269 68 36ZM72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM36 66C52.5685 66 66 52.5685 66 36C66 19.4315 52.5685 6 36 6C19.4315 6 6 19.4315 6 36C6 52.5685 19.4315 66 36 66Z"
                        fill="white"
                />
            </svg>
        </button>
    </VBox>
</LayoutBase>

<style>
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :root {
        --root-metric: 16px;
        --button-height: calc(var(--root-metric) * 5);
    }

    button > svg {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    button {
        padding: 3px;
        height: var(--button-height);
        border-radius: 50%;
        cursor: pointer;
    }

    body {
        overflow: hidden;
    }

</style>
