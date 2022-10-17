import { ArrowRight } from 'phosphor-react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@sanderdsz/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {}
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Button
        <ArrowRight weight='bold' />
      </>
    )
  }
}
