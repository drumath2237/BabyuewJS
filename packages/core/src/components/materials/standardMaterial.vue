<script setup lang="ts">
import { StandardMaterial } from "@babylonjs/core";
import { createMaterialComponentCore } from "./materialComponentCore";
import { arr3ToColor3 } from "../../utils/dataConversion";
import { BabyuewMaterialComponent } from "../../data/injectionKeys";
import { watch } from "vue";

const props = defineProps<{
  name?: string;
  color?: [number, number, number];
}>();

const { onInit, getMaterial } = createMaterialComponentCore(() => {
  const standardMaterial = new StandardMaterial(
    props.name ?? "standard material",
  );

  if (props.color) {
    standardMaterial.diffuseColor = arr3ToColor3(props.color);
  }

  return standardMaterial;
});

watch(
  () => props.color,
  (color) => {
    const material = getMaterial();
    if (!material || !color) {
      return;
    }

    const standardMaterial = material as StandardMaterial;

    standardMaterial.diffuseColor = arr3ToColor3(color);
  },
  {
    deep: true,
  },
);

defineExpose<BabyuewMaterialComponent>({ onInit, getMaterial });
</script>

<template>
  <slot></slot>
</template>
