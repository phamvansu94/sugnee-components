import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  state: 'enabled',
  icon: 'close',
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: 'hovere',
  icon: 'close',
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: 'pressed',
  icon: 'close',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  icon: 'close',
};
