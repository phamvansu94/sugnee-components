import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonIcon } from './ButtonIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  state: 'enabled',
  //   label: "Button",
};

export const Hovere = Template.bind({});
Hovere.args = {
  state: 'hovere',
  //   label: "Button",
};

export const Pressed = Template.bind({});
Pressed.args = {
  state: 'pressed',
  //   label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  //   label: "Button",
};
