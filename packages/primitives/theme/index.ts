import colors from '../primitives/colors'
import typography from '../primitives/typography'

const theme = {
  colors,
  ...typography,
}

export type Theme = typeof theme

export default theme
