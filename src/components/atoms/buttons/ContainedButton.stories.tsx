import React from 'react';
import { Story, Meta } from '@storybook/react';

import ContainedButton, { ContainedButtonProps, Variant, FontSize } from './ContainedButton';

export default {
  title: 'Atom/Button/ContainedButton',
  component: ContainedButton,
} as Meta;

const Template: Story<ContainedButtonProps> = (args) => <ContainedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '버튼이지롱',
};

export const BigText = Template.bind({});
BigText.args = {
  label: '버튼이지롱',
  fontSize: FontSize.XL,
};

export const LongText = Template.bind({});
LongText.args = {
  label: '이것은버튼일까요아닐까요아무도몰라요',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '버튼이지롱',
  variant: Variant.SECONDARY,
};
