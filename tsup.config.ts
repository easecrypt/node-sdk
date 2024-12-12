import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  target: "es2020",
  format: ["cjs", "esm"],
  sourcemap: true,
  clean: true,
  dts: true,
});
