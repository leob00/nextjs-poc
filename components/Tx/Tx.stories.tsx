import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tx from './Tx'

export default {
  title: 'Tx',
  component: Tx,
} as ComponentMeta<typeof Tx>

export const H1: ComponentStory<typeof Tx> = () => {
    return <Tx tx={{attributes: { variant: 'h1', text: 'Hi mom'}}} />
}

export const H6: ComponentStory<typeof Tx> = () => {
    return <Tx tx={{attributes: { variant: 'h6', text: 'Hi mom'}}} />
}