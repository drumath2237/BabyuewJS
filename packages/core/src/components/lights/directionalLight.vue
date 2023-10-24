<script setup lang="ts">
import { DirectionalLight } from "@babylonjs/core";
import { createLightComponentCore } from "./lightComponentCore";
import { arr3ToVector3 } from "../../utils/dataConversion";
import { BabyuewLightComponent } from "../../data/injectionKeys";
import { watch } from "vue";

const props = defineProps<{
  name?: string;
  direction: [number, number, number];
  intensity?: number;
}>();

const { getLight, onInit } = createLightComponentCore((scene) => {
  const light = new DirectionalLight(
    props.name ?? "light",
    arr3ToVector3(props.direction),
    scene,
  );

  if (props.intensity) {
    light.intensity = props.intensity;
  }

  return light;
});

watch(
  () => props.direction,
  (direction) => {
    const light = getLight();
    if (!light || !(light instanceof DirectionalLight)) {
      return;
    }

    if (!direction) {
      return;
    }

    if (light instanceof DirectionalLight) {
      light.direction = arr3ToVector3(direction);
    }
  },
  {
    deep: true,
  },
);

watch(
  () => props.intensity,
  (intensity) => {
    if (!intensity) {
      return;
    }

    const light = getLight();
    if (!light) {
      return;
    }

    light.intensity = intensity;
  },
  {
    deep: true,
  },
);

defineExpose<BabyuewLightComponent>({ getLight, onInit });
</script>

<template>
  <slot></slot>
</template>
