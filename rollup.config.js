import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript';

const commonBundleConfigs = {
  name: 'daphnis-hooks',
  format: 'esm', // 模块化
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
      file: 'dist/index.esm.js',
    },
    {
      ...commonBundleConfigs,
      file: 'dist/index.esm.min.js',
      plugins: [
        // min 版进行代码压缩
        terser(),
      ],
    },
  ],

  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    eslint(),
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      babelHelpers: 'runtime' // 重复打包
    }),
  ],

  // 不打包
  external: ['react', 'react-dom'],
}

