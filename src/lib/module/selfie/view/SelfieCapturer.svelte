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
    setTimeout(() => {
      let elementImg = document.getElementsByTagName("img");
      onSnapShot(elementImg[elementImg.length - 1].src);
      onClickNext();
    }, 200);
  }

  onDestroy(() => {
    PhotoBooth.destroy();
  });
</script>

<Layout.Base>
  <TopNavBar
    id="top-nav-bar"
    title="ยืนยันตัวตน"
    leftIconName={IconName.West}
    onLeftIconClick={() => {
      goto("/th/selfie/guid");
    }}
  />
  <Layout.Body>
        <VBox verticalAlign={VerticalAlign.Top} gapSize={GapSize['32px']} custom='bg-black bg-opacity-80 h-full w-full'>
      <Text
        color={TextColor.BaseWhite}
        style={TextStyle.Small1}
        align={TextAlign.Center}
        custom="px-12 py-2 pt-6"
        >กรุณาถ่ายรูปคู่ท่านและบัตรประชาชนให้เห็นตัวอักษร
        และข้อมูลบนหน้าบัตรชัดเจน</Text
      >
        <video class= "h-[70%] w-full object-cover"></video>
        <div class="w-full flex items-center justify-center relative py-6">
          <div class="absolute left-1/2 transform -translate-x-1/2 px-6">
            <button name="take_photo" id="take_photo" on:click={snapShot}>
              <img src={CaptureButton} alt="capture" class="w-16 h-16" />
            </button>
          </div>
                  <div class="absolute right-[12%]">
            <button name="flash_button" id="flash_button" on:click={() => { /* add logic here */ }}>
              <img src={FlipCamera} alt="flip_camera" />
            </button>
          </div>
        </div>
        
   </VBox>
  </Layout.Body>
</Layout.Base>

<style>
  :root {
    --root-metric: 16px;
    --footer-height: calc(var(--root-metric) * 7);
    --button-height: calc(var(--root-metric) * 5);
  }


  footer {
    position: absolute;
    bottom: 0;
    width: 100dvw;
    height: var(--footer-height);
    display: flex;
    flex-flow: row nowrap;
    align-content: stretch;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    padding: 3px;
    height: var(--button-height);
    border-radius: 50%;
    cursor: pointer;
  }

  circle {
    fill: #fff;
  }

  body {
    overflow: hidden;
  }
</style>
