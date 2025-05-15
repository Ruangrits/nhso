// @ts-nocheck
import { CameraMode, Defaults, type IButtons } from "./types";

export class PhotoBooth {
  private readonly mode: CameraMode = CameraMode.Environment;

  static buttons: IButtons = { take_photo: null, switch_cam: null };

  static canvas: HTMLCanvasElement;

  static video: HTMLVideoElement;

  static destroy() {
    const stream = PhotoBooth.video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    PhotoBooth.video.srcObject = null;
  }

  static init(cameraMode: CameraMode = PhotoBooth.mode) {
    PhotoBooth.mode = cameraMode;
    PhotoBooth.buttons.take_photo = document.querySelector(
      "button[name='take_photo']"
    );

    PhotoBooth.buttons.take_photo.onclick = () => {
      PhotoBooth.take_photo(0.6);
    };

    navigator.mediaDevices
      .enumerateDevices()
      .then(PhotoBooth.on_enumerate_devices)
      .catch(PhotoBooth.on_error);
  }

  static on_enumerate_devices(devices: MediaDeviceInfo[]): Promise<void> {
    if (devices.length < 1) {
      PhotoBooth.buttons.take_photo.disabled = true;
    }
    if (devices.length < 2) {
      PhotoBooth.buttons.switch_cam.disabled = false;
    }
    return PhotoBooth.init_camera();
  }

  static init_camera(): Promise<void> {
    return PhotoBooth.get_media()
      .then(PhotoBooth.on_get_media)
      .catch(PhotoBooth.on_error);
  }

  static switchCamera() {
    PhotoBooth.mode =
      PhotoBooth.mode === CameraMode.User
        ? CameraMode.Environment
        : CameraMode.User;

    PhotoBooth.destroy();

    PhotoBooth.init(PhotoBooth.mode);
    console.log(PhotoBooth.mode);
  }

  static get_media(): Promise<MediaStream> {
    let constraints = { audio: false, video: { facingMode: PhotoBooth.mode } };
    return navigator.mediaDevices.getUserMedia(constraints);
  }

  static on_get_media = (stream: MediaStream) => {
    PhotoBooth.canvas = document.createElement("canvas");

    PhotoBooth.video = document.querySelector("video");
    PhotoBooth.video.setAttribute("autoplay", "");
    PhotoBooth.video.setAttribute("muted", "");
    PhotoBooth.video.setAttribute("playsinline", "");
    PhotoBooth.video.onloadedmetadata = () => {
      PhotoBooth.video.play();
    };
    PhotoBooth.video.oncanplay = () => {
      PhotoBooth.on_video_ready();
    };
    PhotoBooth.video.srcObject = stream;
  };

  static on_video_ready = () => {
    PhotoBooth.canvas.width = Defaults.width;
    PhotoBooth.canvas.height =
      PhotoBooth.video.videoHeight /
      (PhotoBooth.video.videoWidth / Defaults.width);

    PhotoBooth.video.setAttribute(
      "height",
      PhotoBooth.canvas.height.toString()
    );
    PhotoBooth.video.setAttribute("width", PhotoBooth.canvas.width.toString());
  };

  static on_error = (reason: any) => {
    console.log(reason);
  };

  static take_photo(quality: number = 0.6) {
    let context = PhotoBooth.canvas.getContext("2d");
    context.drawImage(
      PhotoBooth.video,
      0,
      0,
      PhotoBooth.canvas.width,
      PhotoBooth.canvas.height
    );
    let url = PhotoBooth.canvas.toDataURL("image/jpeg", quality);

    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute(
      "class",
      "absolute z-10 rounded-lg w-16 h-16 object-cover"
    );
    img.setAttribute("alt", "medicine");

    // Create a text node:
    let addTagImg = document.createTextNode("");

    img.appendChild(addTagImg);
    document.getElementById("stack-photo").appendChild(img);
  }
}
