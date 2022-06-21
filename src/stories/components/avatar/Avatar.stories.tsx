import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';
import { IMAGE, STATE } from '../../constants/propsType';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  state: STATE.ENAVLED,
  image: IMAGE.AVATAR_01,
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: STATE.HOVERE,
  image: IMAGE.AVATAR_01,
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: STATE.PRESSED,
  image: IMAGE.AVATAR_01,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: STATE.DISABLED,
  image: IMAGE.AVATAR_01,
};
