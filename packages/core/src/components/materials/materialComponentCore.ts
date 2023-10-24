import { Material } from "@babylonjs/core";
import { EventSystem } from "../../utils/eventSystem";
import { inject, provide } from "vue";
import {
  babyuewMaterialInjectionKey,
  babyuewMeshInjectionKey,
} from "../../data/injectionKeys";

export const createMaterialComponentCore = (
  materialFactory: () => Material,
) => {
  const onInit = new EventSystem<Material>();
  let material: Material | null = null;
  const getMaterial = () => material;
  provide(babyuewMaterialInjectionKey, { onInit, getMaterial });

  const injectedMesh = inject(babyuewMeshInjectionKey);
  injectedMesh?.onInit.addListener(({ detail }) => {
    const createdMaterial = materialFactory();
    detail.material = createdMaterial;
    material = createdMaterial;
    onInit.notify(createdMaterial);
  });

  return { onInit, getMaterial };
};
