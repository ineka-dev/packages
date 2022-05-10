# Rollup configurations for ineka packages

These are base shared Rollup configurations that are used across ineka packages.

## Usage

```js
import { esbuildConfig, dtsConfig } from '@ineka/rollup-config';
import pkg from './package.json' assert { type: 'json' };

// We extract the output file name from package.json main.
const name = pkg.main.replace(/\.js$/, '');

// Define input file and external dependencies
const input = 'src/index.ts';
const external = ['nanoid'];

// Use configurations
export default [
  { ...esbuildConfig(name), input, external },
  { ...dtsConfig(name), input, external },
];

```

You will need to use `.mjs` as your configuration extension as we use ES modules in our configurations.