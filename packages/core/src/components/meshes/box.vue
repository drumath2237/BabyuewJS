<script setup lang="ts">
import { watch } from "vue";
import { createMeshComponentCore } from "./meshComponentCore";
import { MeshBuilder } from "@babylonjs/core";
import { arr3ToVector3 } from "../../utils/dataConversion";
import { BabyuewMeshComponent } from "../../data/injectionKeys";

const props = defineProps<{
  name?: string;
  position?: [number, number, number];
  size: number;
}>();

const { onInit, getMesh } = createMeshComponentCore(() => {
  const box = MeshBuilder.CreateBox(props.name ?? "box", { size: props.size });

  if (props.position) {
    box.position = arr3ToVector3(props.position);
  }

  return box;
});

watch(
  () => props.position,
  (position) => {
    if (!position) {
      return;
    }

    const mesh = getMesh();
    if (mesh) {
      mesh.position = arr3ToVector3(position);
    }
  },
  { deep: true },
);

defineExpose<BabyuewMeshComponent>({ onInit, getMesh });
</script>

<template>
  <slot></slot>
</template>
