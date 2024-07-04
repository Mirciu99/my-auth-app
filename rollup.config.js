import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/my-app.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' },
        { src: 'src/assets/images/*', dest: 'dist/assets/images' }
      ]
    })
  ]
};
