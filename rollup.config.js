import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
    input: 'tmp/index.js',
    output: {
        file: 'dist/ha-multi-entity-selector.js',
        format: 'esm',
    },
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    },
    plugins: [
        replace({ preventAssignment: false, 'Reflect.decorate': 'undefined' }),
        resolve(),
        terser({
            ecma: 2021,
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
        }),
        summary(),
    ],
};