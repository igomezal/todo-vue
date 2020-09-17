import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import html from 'rollup-plugin-generate-html-template';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import VuePlugin from "rollup-plugin-vue";

const isDev = process.env.NODE_ENV === 'development';

export default {
    input: './src/main.js',
    output: {
        dir: './dist/',
        format: 'es',
    },
    plugins: [
        terser(), 
        nodeResolve(),
        VuePlugin(),
        html({
            template: 'index.html',
            target: 'dist/index.html',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
        }),
        ...isDev ?
        [serve('dist'), livereload('dist')] : []
    ],
};