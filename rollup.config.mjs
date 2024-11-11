import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH,

 modernConfig = {
  input: {
    ['auro-header__bundled']: './index.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    nodeResolve(),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ],
  plugins: [nodeResolve()],
};

const indexExamplesConfig = {
  input: {
    ['index.min']: './demo/index.js',
  },
  output: {
    format: 'esm',
    dir: 'demo/'
  },
  plugins: [nodeResolve()],
};

export default [modernConfig, indexExamplesConfig];
