import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../../utils/eventSystem";
import { provide } from "vue";
import { babyuewMeshInjectionKey } from "../../data/injectionKeys";
import { useBabyuewScene } from "../../composables/useBabyuewScene";

export const createMeshComponentCore = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  let mesh: Mesh | null = null;

  const getMesh = () => mesh;

  provide(babyuewMeshInjectionKey, {
    onInit,
    getMesh,
  });

  const { onSceneInit } = useBabyuewScene();
  onSceneInit(() => {
    mesh = meshFactory();
    onInit.notify(mesh);
  });

  return {
    onInit,
    getMesh,
  };
};
