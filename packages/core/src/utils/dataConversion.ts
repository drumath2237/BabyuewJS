import { Color3, Vector3 } from "@babylonjs/core";

export const xyzToVector3 = (xyz: { x: number; y: number; z: number }) => {
  const { x, y, z } = xyz;
  return new Vector3(x, y, z);
};

export const arr3ToVector3 = (arr: [number, number, number]) => {
  return new Vector3(arr[0], arr[1], arr[2]);
};

export const rgbToColor3 = (rgb: { r: number; g: number; b: number }) => {
  const { r, g, b } = rgb;
  return new Color3(r, g, b);
};

export const arr3ToColor3 = (arr: [number, number, number]) => {
  return new Color3(arr[0], arr[1], arr[2]);
};
