import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // for github pages
  if (mode === "production") {
    return {
      plugins: [
        vue(),
        dts({
          include: ["src/**/**.ts", "src/**/**.vue"],
          exclude: ["src/main.ts", "**/**.svg"],
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "vue-babylon-investigation",
          fileName: "index",
          formats: ["es", "umd"],
        },
        rollupOptions: {
          external: ["vue", "@babylonjs/core"],
          output: {
            globals: {
              vue: "Vue",
              "@babylonjs/core": "BABYLON",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [vue()],
  };
});
