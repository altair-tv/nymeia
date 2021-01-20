import { DarkModeIcon, LightModeIcon } from '@altair-tv/alticons-chakra'
import {
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/variable.css'
import '@storybook/addon-console'
import { withPerformance } from 'storybook-addon-performance'

import { theme } from '../src/theme'
import uiTheme from './theme'

export const parameters = {
  showRoots: true,
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  docs: { theme: uiTheme }
}

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(DarkModeIcon, LightModeIcon)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}
const withChakra = (Story: any) => (
  <ChakraProvider theme={theme}>
    <ColorModeToggleBar />
    <Story />
  </ChakraProvider>
)

export const decorators = [withChakra, withPerformance]
