import React from 'react';
import { Story, Meta } from '@storybook/react';

import OpaqueButton, { OpaqueButtonPropsType } from './OpaqueButton';

import { FontSize } from '@/styles/styleConstants';

export default {
  title: 'Atom/Button/OpaqueButton',
  component: OpaqueButton,
} as Meta;

const Template: Story<OpaqueButtonPropsType> = (args) => <OpaqueButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '닫기',
  fontSize: FontSize.XS,
};
