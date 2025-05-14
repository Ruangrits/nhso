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
  import CaptureButton from "../capture-button.png"
  import FlipCamera from "../flip_camera.png"
  import { onDestroy, onMount } from "svelte";
  import { PhotoBooth } from "../../../camera/photobooth";
  import { CameraMode } from "../../../camera/types";
  import LayoutBase from "$lib/module/common/LayoutBase.svelte"
  import { goto } from "$app/navigation";
   
  


  export let onClickNext: () => void;
  export let onSnapShot: (selfieCaptured: string) => void;

  let imagePreview: string | null = null;
  onMount(() => {
    console.log("selfie mounted");
    setTimeout(() => {
      PhotoBooth.init(CameraMode.User);
    }, 200);
  });

  function snapShot() {
  const video = document.getElementById('selfie-video') as HTMLVideoElement;
  if (!video) return;

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/png');

    onSnapShot(image); 
    onClickNext();    
  }
}



  onDestroy(() => {
    PhotoBooth.destroy();
  });
</script>


<TopNavBar
    id="top-nav-bar"
    title="ยืนยันตัวตน"
    leftIconName={IconName.West}
    onLeftIconClick={() => {
      history.back();
    }}
  />
<Layout.Base>
        <VBox verticalAlign={VerticalAlign.Top} gapSize={GapSize['32px']} custom='bg-black bg-opacity-80 h-full w-full'>
      <Text
        color={TextColor.BaseWhite}
        style={TextStyle.Small1}
        align={TextAlign.Center}
        custom="px-12 py-2 pt-6"
        >กรุณาถ่ายรูปคู่ท่านและบัตรประชาชนให้เห็นตัวอักษร
        และข้อมูลบนหน้าบัตรชัดเจน</Text
      >
      <video id="selfie-video" autoplay class="h-[66%] w-full object-cover"></video>
      <div class="w-full flex items-center justify-center relative py-6">
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <button name="take_photo" id="take_photo" on:click={snapShot}
                  class="w-[18vw] max-w-[72px] aspect-square rounded-full">
            <img src={CaptureButton} alt="capture" class="w-full h-full object-contain" />
          </button>
        </div>
        <div class="absolute right-[12%]">
          <button name="flip_camera" id="flip_camera" on:click={() => {}}
                  class="w-[12vw] max-w-[56px] aspect-square">
            <img src={FlipCamera} alt="flip_camera" class="w-full h-full object-contain" />
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
