/* eslint-disable import/extensions */
/* eslint-disable import/no-default-export */

import { esbuildConfig, dtsConfig } from '@ineka/rollup-config';
import pkg from './package.json' assert { type: 'json' };

const name = pkg.main.replace(/\.js$/, '');

const input = 'src/index.ts';
const external = ['@ineka/engine'];

export default [
  { ...esbuildConfig(name), input, external },
  { ...dtsConfig(name), input, external },
];
