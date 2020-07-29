import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
// eslint-disable-next-line import/no-namespace
import * as alticons from '../alticons-react/dist/index.esm'

const icons = Object.keys(alticons).filter(name => name !== 'default')

export default [
  {
    input: 'src/__generated__/index.js',
    plugins: [
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: [['@babel/env', { modules: false }], '@babel/react'],
      }),
      commonjs(),
    ],
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'realticons',
    },
  },
  ...icons.map(name => ({
    input: `src/__generated__/icons/${name}.js`,
    plugins: [
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: [['@babel/env', { modules: false }], '@babel/react'],
      }),
      commonjs(),
    ],
    output: {
      file: `dist/icons/${name}.js`,
      format: 'esm',
    },
  })),
]
