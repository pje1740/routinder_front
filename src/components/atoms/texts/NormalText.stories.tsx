import React from 'react';
import { Story, Meta } from '@storybook/react';

import NormalText, { NormalTextPropsType, TextColor, FontSize } from './NormalText';

export default {
  title: 'Atom/Button/NormalText',
  component: NormalText,
} as Meta;

const Template: Story<NormalTextPropsType> = (args) => <NormalText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '일반텍스트',
  textColor: TextColor.BLACK,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  label: '비활성화된 텍스트',
  textColor: TextColor.LIGHTGRAY,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
  label: '에러메시지',
  fontSize: FontSize.XL,
  textColor: TextColor.RED,
};

export const PurpleText = Template.bind({});
PurpleText.args = {
  label: '프라이머리',
  fontSize: FontSize.SM,
  textColor: TextColor.PRIMARY,
};
