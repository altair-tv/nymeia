import type { StyleInterpolation } from '../types'

const baseStyle: StyleInterpolation = ({ colorMode }) => {
  return {
    chat: {
      bgColor: colorMode === 'light' ? 'white' : '#111219'
    },
    message: { lineHeight: '1.75' },
    author: {
      display: 'inline-flex',
      fontWeight: 700,
      mr: 1,
      verticalAlign: 'bottom'
    },
    pronouns: {
      fontSize: 'xs',
      fontWeight: 400,
      textTransform: 'inherit',
      pb: '2px',
      pt: '1px',
      px: 2,
      rounded: 'sm'
    },
    timestamp: {
      color: colorMode === 'light' ? 'gray.500' : 'gray.600',
      fontSize: 'xs',
      fontWeight: 700
    }
  }
}

const variantStriped = ({ colorMode }) => ({
  message: {
    '&:nth-of-type(odd)': {
      bgColor: colorMode === 'light' ? 'gray.100' : '#0C0D14'
    }
  }
})

const variants = {
  striped: variantStriped,
  unstyled: {}
}

const sizes = {
  sm: { message: { fontSize: 'sm', px: 6, py: 2 } },
  md: { message: { px: 6, py: 3 } }
}

const defaultProps = {
  variant: 'unstyled',
  size: 'md'
}

export const Chat = {
  baseStyle,
  sizes,
  variants,
  defaultProps
}
