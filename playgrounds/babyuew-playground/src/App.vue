<script setup lang="ts">
import {
  BabyuewScene,
  ArcRotateCamera,
  DirectionalLight,
  Box,
} from "@babyuewjs/core";
</script>

<template>
  <BabyuewScene antialias>
    <ArcRotateCamera
      name="camera"
      :alpha="Math.PI / 3"
      :beta="Math.PI / 3"
      :radius="0.5"
      :target="[0, 0.05, 0]"
    >
    </ArcRotateCamera>

    <DirectionalLight
      name="light"
      :direction="[0.25, -1, -0.6]"
      :intensity="1"
    ></DirectionalLight>

    <Box name="my-box" :position="[-0.1, 0.05, 0]" :size="0.1"> </Box>
  </BabyuewScene>
</template>
