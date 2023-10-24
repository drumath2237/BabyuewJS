<script setup lang="ts">
import { BabyuewCameraComponent } from "../../data/injectionKeys";
import { createCameraComponentCore } from "./cameraComponentCore";
import { ArcRotateCamera } from "@babylonjs/core";
import { arr3ToVector3 } from "../../utils/dataConversion";
import { watch } from "vue";

const props = defineProps<{
  name?: string;
  alpha: number;
  beta: number;
  radius: number;
  target: [number, number, number];
}>();

const { getCamera, onInit } = createCameraComponentCore(() => {
  const camera = new ArcRotateCamera(
    props.name ?? "arc rotated caera",
    props.alpha,
    props.beta,
    props.radius,
    arr3ToVector3(props.target),
  );
  camera.attachControl();
  camera.minZ = 0.01;
  camera.wheelPrecision = 100 / props.radius;

  return camera;
});

// todo: 複数の値をwatchするために一緒くたにまとめているが
//       パフォーマンスは良くない
watch(
  () => [props.alpha, props.beta, props.radius],
  ([alpha, beta, radius]) => {
    const camera = getCamera();
    if (!camera) {
      return;
    }

    const arcRotatedCamera = camera as ArcRotateCamera;
    arcRotatedCamera.alpha = alpha;
    arcRotatedCamera.beta = beta;
    arcRotatedCamera.radius = radius;
  },
  {
    deep: true,
  },
);

watch(
  () => props.target,
  (traget) => {
    const camera = getCamera();
    if (!camera) {
      return;
    }

    const arcRotatedCamera = camera as ArcRotateCamera;
    arcRotatedCamera.target = arr3ToVector3(traget);
  },
  {
    deep: true,
  },
);

defineExpose<BabyuewCameraComponent>({ onInit, getCamera });
</script>

<template>
  <slot></slot>
</template>
