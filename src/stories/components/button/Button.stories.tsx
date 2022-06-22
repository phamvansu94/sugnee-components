import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { STATE } from '../../constants/propsType';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: STATE.ENAVLED,
  label: 'Enabled',
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: STATE.HOVERE,
  label: 'Hovere',
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: STATE.PRESSED,
  label: 'Pressed',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: STATE.DISABLED,
  label: 'Disabled',
};
