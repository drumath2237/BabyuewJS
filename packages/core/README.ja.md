# BabyuewJS

[English](./README.md) | 日本語

![npm](https://img.shields.io/npm/v/%40babyuewjs%2Fcore) ![NPM](https://img.shields.io/npm/l/%40babyuewjs%2Fcore)

## About

BabyuewJSはBabylon.jsとVue3を使ってWeb 3Dアプリケーションを開発するためのライブラリです。
Babylon.jsが備える3Dシーン構築・レンダリングのための機能と、Vue3が備えるSFCやリアクティビティといった強力な機能とをかけ合わせることで、より良い開発体験を提供します。

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

既存のVue3を使用したプロジェクトにおいて、`BabyuewScene`コンポーネントを配置することでBabylon.jsのシーンをレンダリングするためのcanvasが配置され、
その`slots`にBabylon.jsのオブジェクト用コンポーネントを配置していきます。

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
