import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");
const dts = require('rollup-plugin-dts').default;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/cjs", 
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist/esm", 
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss(),
      image(),
      json()
    ],
    external: ["react", "react-dom", "fs", "indexof"],
  },
  {
    input: "src/index.ts",
    output: { file: packageJson.types },
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/],
  },
];

