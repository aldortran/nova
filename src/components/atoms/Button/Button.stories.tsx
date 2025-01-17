import React from 'react'

import {ComponentStory, ComponentMeta} from '@storybook/react'

import {Button, ButtonProps} from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  label: 'Click me',
  onClick: console.log,
  disabled: false
} as ButtonProps
