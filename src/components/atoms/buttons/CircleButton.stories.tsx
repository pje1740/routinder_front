import React from 'react';
import { Story, Meta } from '@storybook/react';

import CircleButton, { CircleButtonPropsType, FontSize } from './CircleButton';

export default {
  title: 'Atom/Button/CircleButton',
  component: CircleButton,
} as Meta;

const Template: Story<CircleButtonPropsType> = (args) => <CircleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '+',
};

export const BigText = Template.bind({});
BigText.args = {
  label: '+',
  fontSize: FontSize.XL,
};
