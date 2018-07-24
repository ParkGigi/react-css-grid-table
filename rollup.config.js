import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const common = {
  input: 'lib/index.js',
  external: [
    'react', 
    'prop-types'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

export default [
  Object.assign({}, common, {
    output: {
      file: 'dist/react-css-grid-table.js',
      format: 'es'
    }
  }),
  Object.assign({}, common, {
    output: {
      file: 'dist/react-css-grid-table.min.js',
      format: 'iife',
      name: 'ReactCSSGridTable'
    }
  })
];
