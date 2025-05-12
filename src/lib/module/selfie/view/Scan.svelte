<script lang="ts">
  import {
    Layout,
    Card,
    TopNavBar,
    IconName
  } from '@bull-shark/tdh-lib-mason'
  import {onDestroy, onMount} from "svelte"
  import {PhotoBooth} from "../../../camera/photobooth"
  import {CameraMode} from "../../../camera/types"
  import {goto} from "$app/navigation"

  let imagePreview: string | null = null
  onMount(() => {

    setTimeout(() => {
      PhotoBooth.init(CameraMode.User)
    }, 200)
  })

  function snapShot() {
    setTimeout(() => {
      let elementImg = document.getElementsByTagName('img')
      imagePreview = elementImg[elementImg.length - 1].src
    }, 200)

  }

  onDestroy(() => {
    PhotoBooth.destroy()
  })
</script>
<Layout.Base>
    <TopNavBar id="top-nav-bar"
               title="mordee"
               leftIconName={IconName.West}
               onLeftIconClick={() => {goto('/th/prescreen/address')}}/>
    <Layout.Body>
        <Card custom="h-[50%] m-4" rounded="rounded-lg" padding="p-0">
            <video class="h-full w-full object-cover rounded-lg"></video>
        </Card>
        <img src={imagePreview}/>
    </Layout.Body>
    <footer class="bg-primary-100">
        <div id="stack-photo" class="relative w-16 h-16 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.4)] hidden"></div>
        <button name="take_photo" id="take_photo" on:click={snapShot}>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M68 36C68 53.6731 53.6731 68 36 68C18.3269 68 4 53.6731 4 36C4 18.3269 18.3269 4 36 4C53.6731 4 68 18.3269 68 36ZM72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM36 66C52.5685 66 66 52.5685 66 36C66 19.4315 52.5685 6 36 6C19.4315 6 6 19.4315 6 36C6 52.5685 19.4315 66 36 66Z"
                        fill="white"
                />
            </svg>
        </button>
    </footer>
</Layout.Base>

<style>
    /*video {*/
    /*    width: 80%;*/
    /*    height: 70%;*/
    /*    object-fit: cover;*/
    /*}*/

    :root {
        --root-metric: 16px;
        --footer-height: calc(var(--root-metric) * 7);
        --button-height: calc(var(--root-metric) * 5);
    }

    button > svg {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
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
