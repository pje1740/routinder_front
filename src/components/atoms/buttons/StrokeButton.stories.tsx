import React from 'react';
import { Story, Meta } from '@storybook/react';

import StrokeButton, { StrokeButtonPropsType, FontSize } from './StrokeButton';

export default {
  title: 'Atom/Button/StrokeButton',
  component: StrokeButton,
} as Meta;

const Template: Story<StrokeButtonPropsType> = (args) => <StrokeButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '월',
};

export const BigText = Template.bind({});
BigText.args = {
  label: '월',
  fontSize: FontSize.XL,
};

export const LongText = Template.bind({});
LongText.args = {
  label: '이것은버튼일까요아닐까요아무도몰라요',
};
