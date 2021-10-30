import React from 'react';
import { Story, Meta } from '@storybook/react';

import CircleButton, { CircleButtonPropsType } from './CircleButton';

export default {
  title: 'Atom/Button/CircleButton',
  component: CircleButton,
} as Meta;

const Template: Story<CircleButtonPropsType> = (args) => <CircleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // label: '+',
};
