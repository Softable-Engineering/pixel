import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    calendar: 'src/components/toolkit/Calendar/index.tsx',
    'data-table': 'src/components/tables/DataTable/index.tsx'
  },
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  shims: true,

  external: [
    'react',
    'react-dom',
    'styled-components',
    '@dnd-kit/core',
    '@dnd-kit/sortable',
    '@tanstack/react-table',
    'facepaint',
    'framer-motion'
  ],
  alias: {
    '@components': 'src/components',
    '@utils': 'src/utils',
    '@type': 'src/types',
    '@globals': 'src/globals',
    '@assets': 'src/assets',
    '@hooks': 'src/hooks',
    '@animations': 'src/components/animations'
  }
})
