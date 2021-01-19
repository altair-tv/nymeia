import React from 'react'

import { Button } from '.'

export default {
  title: 'Design System/Primitives/Button'
}

export const Basic = args => <Button {...args} />
Basic.args = { children: 'Label' }

export const All = () => (
  <>
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
  </>
)

export const Sizes = () => (
  <>
    <Button size="lg">Large</Button>
    <Button size="md">Default</Button>
    <Button size="sm">Small</Button>
  </>
)
