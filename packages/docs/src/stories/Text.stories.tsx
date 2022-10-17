import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@sanderdsz/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: ('Lorem Ipsum, sit dolor amet.')
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {}
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}