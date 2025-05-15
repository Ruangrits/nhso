<script lang="ts">
  import {
    Text,
    Layout,
    Card,
    TopNavBar,
    IconName,
    TextColor,
    TextStyle,
    TextAlign,
    VBox,
    GapSize,
    VerticalAlign,
  } from "@bull-shark/tdh-lib-mason";
  import CaptureButton from "$lib/module/common/images/capture-button.png";
  import FlipCamera from "$lib/module/common/images/flip_camera.png";
  import { onDestroy, onMount } from "svelte";
  import { PhotoBooth } from "../../../camera/photobooth";
  import { CameraMode } from "../../../camera/types";
  import LayoutBase from "$lib/module/common/LayoutBase.svelte";
  import { goto } from "$app/navigation";
  import type { SelfieDictionary } from "$lib/core/l10n/selfie";

  export let onClickNext: () => void;
  export let onSnapShot: (selfieCaptured: string) => void;
  export let captions: SelfieDictionary;

  let imagePreview: string | null = null;
  onMount(() => {
    console.log("selfie mounted");
    setTimeout(() => {
      PhotoBooth.init(CameraMode.User);
    }, 200);
  });

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
    PhotoBooth.destroy();
  });
</script>

<TopNavBar
  id="top-nav-bar"
  title="ยืนยันตัวตน"
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
    custom="bg-black bg-opacity-80 h-full w-full"
  >
    <Text
      color={TextColor.BaseWhite}
      style={TextStyle.Body1}
      align={TextAlign.Center}
      custom="px-12 py-2 pt-6">{captions.scan.title}</Text
    >
    <video autoplay class="h-[66%] w-full object-cover rounded-lg"></video>
    <div id="stack-photo" class="hidden"></div>
    <div class="w-full flex items-center justify-center relative py-6">
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <button
          name="take_photo"
          id="take_photo"
          on:click={snapShot}
          class="w-[18vw] max-w-[72px] aspect-square rounded-full"
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
          class="w-[12vw] max-w-[56px] aspect-square"
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
    --footer-height: calc(var(--root-metric) * 7);
    --button-height: calc(var(--root-metric) * 5);
  }

  button {
    padding: 3px;
    height: var(--button-height);
    border-radius: 50%;
    cursor: pointer;
  }
</style>
