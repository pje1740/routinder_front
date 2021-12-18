import React from 'react';
import { Story, Meta } from '@storybook/react';

import FillButton, { FillButtonPropsType, Variant } from './FillButton';

import { FontSize } from '@/styles/styleConstants';

export default {
  title: 'Atom/Button/FillButton',
  component: FillButton,
} as Meta;

const Template: Story<FillButtonPropsType> = (args) => <FillButton {...args} />;

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
