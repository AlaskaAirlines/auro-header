import { nodeResolve } from "@rollup/plugin-node-resolve";

const _production = !process.env.ROLLUP_WATCH;
const modernConfig = {
  input: {
    "auro-header__bundled": "./index.js",
  },
  output: {
    format: "esm",
    dir: "dist/",
  },
  plugins: [nodeResolve()],
};

const indexExamplesConfig = {
  input: {
    "index.min": "./demo/index.js",
  },
  output: {
    format: "esm",
    dir: "demo/",
  },
  plugins: [nodeResolve()],
};

export default [modernConfig, indexExamplesConfig];
