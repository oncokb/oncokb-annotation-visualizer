import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import postcss from "rollup-plugin-postcss";

const name = require('./package.json').main.replace(/\.js$/, '')
const dts = require('rollup-plugin-dts').default;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({mainFields: ['browser', 'module', 'main'],}),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        extract: true,  
        minimize: true, 
        sourceMap: true, 
      }),
      image(),
      json()
    ],
    external: ["react", "react-dom"],
  },
  {
    input: 'src/index.ts',
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/, "react", "react-dom", "fs", "worker_threads", /^src\/storybook/, /\.yarn$/], 
  },
];
