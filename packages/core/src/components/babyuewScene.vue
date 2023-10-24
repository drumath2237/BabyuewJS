<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useBabyuewSceneForInternals } from "../composables/useBabyuewScene";
import { Engine, Scene } from "@babylonjs/core";

const props = defineProps<{
  antialias: boolean;
}>();

const renderCanvas = ref<HTMLCanvasElement>();
let scene: Scene | null = null;

onMounted(() => {
  if (!renderCanvas.value) {
    return;
  }

  const engine = new Engine(renderCanvas.value, props.antialias);
  scene = new Scene(engine);

  engine.runRenderLoop(() => {
    scene?.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });

  const { initScene } = useBabyuewSceneForInternals();
  initScene(scene);
});
</script>

<template>
  <canvas id="renderCanvas" ref="renderCanvas"></canvas>
  <slot></slot>
</template>

<style scoped lang="scss">
#renderCanvas {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none !important;
  outline: none !important;
  display: block;
}
</style>
