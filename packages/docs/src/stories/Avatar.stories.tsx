import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@sanderdsz/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/sanderdsz.png',
    alt: 'Sander Zuchinalli'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {}
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
