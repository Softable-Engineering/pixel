import { defineConfig } from 'tsup'
import path from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  shims: true,
  splitting: true,

  external: [
    'react',
    'react-dom',
    'styled-components',
    '@dnd-kit/core',
    '@dnd-kit/sortable',
    '@tanstack/react-table',
    'facepaint'
  ],

  esbuildOptions(options) {
    options.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@globals': path.resolve(__dirname, 'src/globals'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@animations': path.resolve(__dirname, 'src/components/animations')
    }
  }
})
