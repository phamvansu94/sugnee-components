import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  state: 'enabled',
  label: 'Enabled',
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: 'hovere',
  label: 'Hovere',
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: 'pressed',
  label: 'Pressed',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  label: 'Disabled',
};
