import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text, { TextPropsType, TextType } from './Text';

import { FontSize, TextColor } from '@/styles/styleConstants';

export default {
  title: 'Atom/Text/Text',
  component: Text,
} as Meta;

const Template: Story<TextPropsType> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '일반텍스트',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  label: '비활성화된 텍스트',
  textColor: TextColor.LIGHTGRAY,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  label: '에러메시지',
  fontSize: FontSize.SM,
  textColor: TextColor.RED,
};

export const Heading01 = Template.bind({});
Heading01.args = {
  label: 'heading1',
  textColor: TextColor.PRIMARY,
  textType: TextType.H1,
};
