import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: '$ignite500',
  
  borderRadius: '$md',
  border: 0,

  fontFamily: '$default',
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$3 $6'
      },
      big: {
        fontSize: 16,
        padding: '$3 $6'
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export type ButtonProps = ComponentProps<typeof Button>
