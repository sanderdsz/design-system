import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@sanderdsz/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Button'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {}
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
}
