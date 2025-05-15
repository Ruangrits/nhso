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
    TextAlign,

    GapSize

  } from '@bull-shark/tdh-lib-mason'
  import {onDestroy, onMount} from "svelte"
  import {PhotoBooth} from "$lib/camera/photobooth"
  import {CameraMode} from "$lib/camera/types"
  import type {IdCardScannerDictionary} from "$lib/core/l10n/id-card-scanner"
  import CaptureButton from "$lib/module/common/images/capture-button.png";
  import FlipCamera from "$lib/module/common/images/flip_camera.png";
  import IdCardFrame from "$lib/module/common/images/id-card-frame.png";



  export let captions: IdCardScannerDictionary
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
      const capturedImg = document.querySelector(
        "#stack-photo img:last-child"
      ) as HTMLImageElement | null;
      if (!capturedImg || !capturedImg.src) {
        return;
      }
      onSnapShot(capturedImg.src);
      onClickNext();
    }, 0);
  }

  onDestroy(() => {
    PhotoBooth.destroy()
  })
</script>

<TopNavBar
  id="top-nav-bar"
  title="สแกนบัตรประชาชน"
  customTxtTitle="!text-[20px] !font-semibold"
  leftIconName={IconName.West}
  onLeftIconClick={() => {
    history.back();
  }}
/>
<Layout.Base>
  <VBox 
    verticalAlign={VerticalAlign.Top}
    gapSize={GapSize["32px"]}
    custom="bg-black h-full w-full"
  >
    <div class="relative w-full h-[100vh] bg-black">
      <!-- Camera Video Background -->
      <video autoplay class="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <!-- Top Overlay with Text -->
      <div class="absolute top-0 left-0 w-full h-[calc(35%-82px)] bg-black bg-opacity-80 z-10 flex items-center justify-center px-6">
        <Text
          color={TextColor.BaseWhite}
          style={TextStyle.Body1}
          align={TextAlign.Center}
          custom="!text-[16px] font-normal leading-relaxed"
        >
          {captions.scan.title}
        </Text>
      </div>
      <!-- ID Card Frame -->
      <div class="absolute top-[43%] left-1/2 w-[262px] h-[164px] z-20 transform -translate-x-1/2 -translate-y-1/2 ">
        <img
          src={IdCardFrame}
          alt="ID card guide frame"
          class="w-full h-full object-contain"
        />
      </div>
      <!-- Bottom Overlay -->
      <div class="absolute bottom-0 left-0 w-full h-[calc(50%-82px)] bg-black bg-opacity-80 z-10"></div>
    </div>
    <!-- Hidden Capture Stack -->
    <div id="stack-photo" class="hidden"></div>
    <!-- Action Buttons -->
    <div class="w-full flex items-center justify-center relative py-6">
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <button
          name="take_photo"
          id="take_photo"
          on:click={snapShot}
          class="w-[74px] h-[74px] rounded-full"
        >
          <img
            src={CaptureButton}
            alt="capture"
            class="w-full h-full object-contain"
          />
        </button>
      </div>
      <div class="absolute right-[12%]">
        <button
          name="flip_camera"
          id="flip_camera"
          on:click={PhotoBooth.switchCamera}
          class="w-[60px] h-[60px] rounded-full"
        >
          <img
            src={FlipCamera}
            alt="flip_camera"
            class="w-full h-full object-contain"
          />
        </button>
      </div>
    </div>
  </VBox>
</Layout.Base>

<style>

    :root {
        --root-metric: 16px;
        --button-height: calc(var(--root-metric) * 5);
    }
    button {
        padding: 3px;
        height: var(--button-height);
        border-radius: 50%;
        cursor: pointer;
    }
</style>