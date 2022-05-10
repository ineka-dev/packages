import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const esbuildConfig = (name) => ({
  plugins: [esbuild({
    minify: process.env.NODE_ENV === 'production',
  })],
  output: [
    {
      file: `${name}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `${name}.mjs`,
      format: 'es',
      sourcemap: true,
    },
  ],
});

const dtsConfig = (name) => ({
  plugins: [dts()],
  output: {
    file: `${name}.d.ts`,
    format: 'es',
  },
});

export { esbuildConfig, dtsConfig };
