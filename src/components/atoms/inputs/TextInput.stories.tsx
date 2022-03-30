import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextInput, { TextInputPropsType } from '../inputs/TextInput';

export default {
  title: 'Atom/Input/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputPropsType> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '루틴을 입력해주세요',
  width: 350,
  maxLength: 18,
};
