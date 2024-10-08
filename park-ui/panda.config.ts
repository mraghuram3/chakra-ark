import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'amber',
      grayColor: 'sand',
      additionalColors: ['red'],
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
})
