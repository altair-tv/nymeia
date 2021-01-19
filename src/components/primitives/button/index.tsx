import { Button as ChakraButton } from '@chakra-ui/react'
import type { ButtonProps, SystemStyleObject } from '@chakra-ui/react'
import type { StyleConfig } from '@chakra-ui/theme-tools'
import React from 'react'
import type { FC } from 'react'

//  Style Properties

const baseStyle: SystemStyleObject = {
  fontWeight: 600,
  rounded: 4,
  textTransform: 'uppercase'
}

const variantSolid: SystemStyleObject = {
  bg: 'blue.200',
  color: 'black.100',
  _hover: {
    bg: 'blue.100'
  },
  _active: {
    bg: 'blue.300'
  }
}

const variantOutline: SystemStyleObject = {
  border: 'none',
  boxShadow: 'inset 0 0 0 1px currentColor',
  color: 'blue.200',
  _hover: {
    bg: 'transparent',
    color: 'blue.100'
  },
  _active: {
    bg: 'transparent',
    color: 'blue.300'
  }
}

const sizes = {
  sm: {
    fontSize: 'xs',
    fontWeight: 400,
    h: 'auto',
    px: 2,
    py: 1,
    textTransform: 'none'
  },
  md: {
    fontSize: 'xs',
    h: 'auto',
    px: 3,
    py: 2
  },
  lg: {
    fontSize: 'sm',
    h: 'auto',
    px: 4,
    py: 2
  }
}

const variants = {
  solid: variantSolid,
  outline: variantOutline
}

const defaultProps = {
  variant: 'solid',
  size: 'md'
}

export const ButtonStyle: StyleConfig = {
  baseStyle,
  sizes,
  variants,
  defaultProps
}

//  Component

export const Button: FC<ButtonProps> = props => {
  return <ChakraButton {...props} />
}
