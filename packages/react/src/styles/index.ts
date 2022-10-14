import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@sanderdsz/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  config,
  createTheme,
  getCssText,
  prefix,
  reset,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    maxWidth: 'space',
    heigth: 'space',
    maxHeight: 'space'
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
