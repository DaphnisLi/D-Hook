import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'

const commonBundleConfigs = {
  name: 'daphnis-hooks',
  format: 'umd', // 模块化
  sourcemap: true,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}

export default {
  input: 'src/index.ts',

  output: [
    {
      ...commonBundleConfigs,
      file: 'dist/index.umd.js',
    },
    {
      ...commonBundleConfigs,
      file: 'dist/index.umd.min.js',
      plugins: [
        // min 版进行代码压缩
        terser(),
      ],
    },
  ],

  plugins: [
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs({
      transformMixedEsModules: true,
      include: /node_modules/,
      exclude: /node_modules\/react-beautiful-dnd/,
    }),
    typescript(),
    eslint(),
    postcss(),
    json(),
  ],

  external: [
    'react',
    'react-dom',
  ],
}

