import { Light, Scene } from "@babylonjs/core";
import { EventSystem } from "../../utils/eventSystem";
import { provide } from "vue";
import { babyuewLightInjectionKey } from "../../data/injectionKeys";
import { useBabyuewScene } from "../../composables/useBabyuewScene";

export const createLightComponentCore = (factory: (scene: Scene) => Light) => {
  const onInit = new EventSystem<Light>();
  let light: Light | null = null;
  const getLight = () => light;
  provide(babyuewLightInjectionKey, { onInit, getLight });

  const { onSceneInit } = useBabyuewScene();
  onSceneInit((scene) => {
    light = factory(scene);
    onInit.notify(light);
  });

  return {
    onInit,
    getLight,
  };
};
