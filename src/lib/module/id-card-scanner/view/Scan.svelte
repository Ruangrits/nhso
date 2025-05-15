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
  verticalAlign ={VerticalAlign.Top}
  gapSize ={GapSize["32px"]}
  custom ="bg-black bg-opacity-80 h-full w-full">
  <Text
  color={TextColor.BaseWhite}
  style={TextStyle.Body1}
  align={TextAlign.Center}
  custom="px-12 py-2 pt-6">{captions.scan.title}</Text
>



<div class="relative w-full h-[250px] flex items-center justify-center">
  <video autoplay class="absolute top-0 left-0 w-full h-full object-cover z-0" />


  <img
    src={IdCardFrame}
    alt="ID card guide frame"
    class="absolute top-1/2 left-1/2 w-[262px] h-[164px] object-contain z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
  />
</div>

<div id="stack-photo" class="hidden"></div>
<div class="w-full flex items-center justify-center relative py-6">
  <div class="absolute left-1/2 transform -translate-x-1/2">
    <button
      name="take_photo"
      id="take_photo"
      on:click={snapShot}
      class="w-[74px] rounded-full"
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
      class="w-[60px] rounded-full"
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
