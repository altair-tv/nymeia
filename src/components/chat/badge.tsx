import { RocketIcon, ShieldHalfIcon } from '@altair-tv/alticons-chakra'
import { Box } from '@chakra-ui/react'
import React from 'react'
import type { FC } from 'react'

export const ModeratorBadge: FC = props => {
  return (
    <Box bgColor="turquoise.500" padding="3px" rounded="sm">
      <ShieldHalfIcon fill="white" display="block" boxSize={18} />
    </Box>
  )
}

export const SupporterBadge: FC = props => {
  return (
    <Box bgColor="blue.300" padding="3px" rounded="sm">
      <RocketIcon fill="white" display="block" boxSize={18} />
    </Box>
  )
}
