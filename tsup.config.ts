import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist/esm',
    dts: true,
    sourcemap: true,
    target: 'es2022',
    clean: true
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'dist/cjs',
    sourcemap: true,
    target: 'es2022',
    clean: false,
    outExtension () {
      return { js: '.js' }
    }
  }
])
