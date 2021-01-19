import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Box,
  Grid,
  Text
} from '@chakra-ui/react'
import React from 'react'
import type { FC } from 'react'
import { mode, MultiStyleConfig } from '@chakra-ui/theme-tools'

export const ChatBadge = props => {
  return (
    <Box bgColor="gray.400" boxSize={6} rounded="sm">
      &nbsp;
    </Box>
  )
}
