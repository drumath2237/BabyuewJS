import { Scene } from "@babylonjs/core";
import { shallowReadonly, shallowRef, watch } from "vue";

const babyuewScene = shallowRef<Scene | null>(null);

type SceneFunc = (scene: Scene) => void;
const initCallbacks = Array<SceneFunc>();

export const useBabyuewScene = () => {
  const onSceneInit = (callback: SceneFunc) => {
    if (babyuewScene.value === null) {
      initCallbacks.push(callback);
      return;
    }

    callback(babyuewScene.value);
  };

  const readonlyScene = shallowReadonly(babyuewScene);

  return {
    onSceneInit,
    babyuewScene: readonlyScene,
  };
};

/**
 * a composable for scene
 * this composable is for BabyuewJS internal implementations
 * @returns tools for treat scene
 */
export const useBabyuewSceneForInternals = () => {
  const initScene = (scene: Scene) => {
    if (babyuewScene.value !== null) {
      console.error("scene has already inited");
      return;
    }

    babyuewScene.value = scene;
  };

  const forceReplaceScene = (scene: Scene) => {
    babyuewScene.value = scene;
  };

  watch(babyuewScene, (scene) => {
    if (scene) {
      initCallbacks.forEach((cb) => {
        cb(scene);
      });
    }
  });

  return {
    initScene,
    forceReplaceScene,
  };
};
