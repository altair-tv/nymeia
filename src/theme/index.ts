import { extendTheme } from '@chakra-ui/react'

import { components } from './components'
import { colors, fonts } from './shared'

import { styles } from './styles'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const overrides = {
  config,
  colors,
  styles,
  components,
  fonts
}

export const theme = extendTheme(overrides)
