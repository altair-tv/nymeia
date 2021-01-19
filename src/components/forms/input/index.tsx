import { Input as ChakraInput } from '@chakra-ui/react'
import type { InputProps, SystemStyleObject } from '@chakra-ui/react'
import type { StyleConfig } from '@chakra-ui/theme-tools'
import React from 'react'
import type { FC } from 'react'

//  Style Properties

const baseStyle: SystemStyleObject = {}

const variants = {}

const defaultProps = {
  size: 'sm'
}

export const InputStyle: StyleConfig = {
  baseStyle,
  variants,
  defaultProps
}

//  Component

export const Input: FC<InputProps> = props => {
  return <ChakraInput {...props} />
}
