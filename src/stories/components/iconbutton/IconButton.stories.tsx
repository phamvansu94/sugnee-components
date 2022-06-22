import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';
import { ICON, STATE } from '../../constants/propsType';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: STATE.ENAVLED,
  icon: ICON.CLOSE,
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: STATE.HOVERE,
  icon: ICON.CLOSE,
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: STATE.PRESSED,
  icon: ICON.CLOSE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: STATE.DISABLED,
  icon: ICON.CLOSE,
};
