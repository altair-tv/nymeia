import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Box,
  Badge,
  Grid,
  Text,
  HStack
} from '@chakra-ui/react'
import React from 'react'
import type { FC } from 'react'

type ChatGroupProps = {
  size: 'md' | 'sm'
  isStriped: boolean
  variant: 'unstyled' | 'striped'
}

export const ChatGroup: FC<ChatGroupProps> = props => {
  const { size, variant, children, ...rest } = props
  const styles = useMultiStyleConfig('Chat', { size, variant })

  return (
    <Grid role="group" sx={styles.chat} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Grid>
  )
}

export const ChatAuthor: FC = props => {
  const styles = useStyles()
  return <HStack spacing={2} sx={styles.author} {...props} />
}

type PronounsProps = { pronouns: string[] }

export const ChatUserPronouns: FC<PronounsProps> = props => {
  const { pronouns, ...rest } = props
  const styles = useStyles()
  return (
    <Badge sx={styles.pronouns} {...rest}>
      {pronouns.join('/')}
    </Badge>
  )
}

export const ChatMessage: FC = props => {
  const styles = useStyles()
  return <Box sx={styles.message} {...props} />
}

export const ChatTimestamp: FC = props => {
  const styles = useStyles()
  return (
    <Box sx={styles.timestamp}>
      <Text as="time" {...props} />
    </Box>
  )
}
