import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    target: 'es6',
    format: ['cjs', 'esm'],
    sourcemap: true,
    clean: true,
    dts: true,
    esbuildOptions(options) {
        options.drop = ['console']; // Remove console.log statements
    },
});
