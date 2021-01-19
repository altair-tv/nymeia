import { Theme, SystemStyleObject } from '@chakra-ui/react'

export type StyleInterpolation =
  | { [part: string]: SystemStyleObject }
  | ((options: StyleOptions) => { [part: string]: SystemStyleObject })

interface StyleOptions {
  theme: Theme
  colorMode: 'light' | 'dark'
  colorScheme: string
}
