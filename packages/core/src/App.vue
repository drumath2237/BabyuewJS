<script setup lang="ts">
import {
  ArcRotateCamera,
  DirectionalLight,
  Box,
  StandardMaterial,
  Sphere,
  BabyuewScene,
} from "./components";
import { ref } from "vue";

const intensity = ref(1.2);

let time = 0;

setInterval(() => {
  time += 0.01;
  intensity.value = Math.sin(time) + 1;
}, 10);
</script>

<template>
  <BabyuewScene antialias>
    <ArcRotateCamera
      :name="'camera'"
      :alpha="Math.PI / 3"
      :beta="Math.PI / 3"
      :radius="0.5"
      :target="[0, 0.05, 0]"
    >
    </ArcRotateCamera>

    <DirectionalLight
      :name="'light'"
      :direction="[0.25, -1, -0.6]"
      :intensity="intensity"
    ></DirectionalLight>

    <Box :name="'my-box'" :position="[-0.1, 0.05, 0]" :size="0.1">
      <StandardMaterial :color="[0, 1, 1]"></StandardMaterial>
    </Box>

    <Sphere :name="'my-sphere'" :diameter="0.1" :position="[0, 0.05, 0]">
      <StandardMaterial :color="[1, 0, 1]"></StandardMaterial>
    </Sphere>
  </BabyuewScene>
</template>
