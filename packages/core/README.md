# BabyuewJS

English | [日本語](./README.ja.md)

![npm](https://img.shields.io/npm/v/%40babyuewjs%2Fcore) ![NPM](https://img.shields.io/npm/l/%40babyuewjs%2Fcore)

## About

BabyuewJS is a library for developing Web 3D applications using Babylon.js and Vue3.
It provides a better developer experience by combining Babylon.js' capabilities for building and rendering 3D scenes with Vue3's powerful features such as SFC and reactivity.

## Enviroment

- Babylon.js 6.x
- Vue3
- TypeScript
- Vite 4.x

## Install

```bash
# npm
npm install -D @babyuewjs/core

# yarn
yarn add -D @babyuewjs/core

# pnpm
pnpm add -D @babyuewjs/core
```

## Usage

In an existing project using Vue3, a canvas for rendering the Babylon.js scene is placed by placing a `BabyuewScene` component,
The components for Babylon.js objects will be placed in its slots.

```html
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

    <Box name="my-box" :position="[0, 0.05, 0]" :size="0.1"> </Box>
  </BabyuewScene>
</template>
```

## Author

[@drumath2237](https://github.com/drumath2237)
