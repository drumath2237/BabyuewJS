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

  renderCanvas.value.style.width = "100%";
  renderCanvas.value.style.height = "100%";
  renderCanvas.value.style.padding = "0";
  renderCanvas.value.style.margin = "0";
  renderCanvas.value.style.border = "none !important";
  renderCanvas.value.style.outline = "none !important";
  renderCanvas.value.style.display = "block";

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
