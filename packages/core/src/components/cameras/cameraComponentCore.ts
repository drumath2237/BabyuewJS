import { Camera } from "@babylonjs/core";
import { EventSystem } from "../../utils/eventSystem";
import { provide } from "vue";
import {
  BabyuewCameraComponent,
  babyuewCameraInjectionKey,
} from "../../data/injectionKeys";
import { useBabyuewScene } from "../../composables/useBabyuewScene";

export const createCameraComponentCore = (
  cameraFactory: () => Camera,
): BabyuewCameraComponent => {
  const onInit = new EventSystem<Camera>();
  let camera: Camera | null = null;
  const getCamera = () => camera;
  provide(babyuewCameraInjectionKey, { onInit, getCamera });

  const { onSceneInit } = useBabyuewScene();
  onSceneInit(() => {
    camera = cameraFactory();
    onInit.notify(camera);
  });

  return { onInit, getCamera };
};
