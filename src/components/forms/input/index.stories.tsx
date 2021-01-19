import React from 'react'

import { Input } from '.'

export default {
  title: 'Design System/Forms/Input',
  component: Input
}

export const Basic = args => <Input {...args} />
Basic.args = {
  placeholder: 'Test'
}
