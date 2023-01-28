import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss'

const commonBundleConfigs = {
  name: 'D-Hook',
  format: 'umd', // 模块化
  sourcemap: true,
  globals: {
    react: 'React',
    antd: 'antd',
    'react-router': 'ReactRouter',
    axios: 'axios',
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
    postcss(),
  ],

  external: [
    'react',
    'antd',
    'react-router',
    'axios',
  ],
}

