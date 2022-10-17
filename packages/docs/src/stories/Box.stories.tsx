import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@sanderdsz/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box Element</Text>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {}
}
