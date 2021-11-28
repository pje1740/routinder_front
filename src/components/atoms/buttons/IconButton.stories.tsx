import React from 'react';
import { Story, Meta } from '@storybook/react';

import IconButton, { IconButtonPropsType } from './IconButton';

export default {
  title: 'Atom/Button/IconButton',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonPropsType> = (args) => <IconButton {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  menuType: 'calendar',
  isSelected: true,
  width: 30,
  height: 30,
};

export const Profile = Template.bind({});
Profile.args = {
  menuType: 'profile',
  isSelected: true,
  width: 30,
  height: 30,
};

export const Setting = Template.bind({});
Setting.args = {
  menuType: 'setting',
  isSelected: true,
  width: 30,
  height: 30,
};

export const Statistics = Template.bind({});
Statistics.args = {
  menuType: 'statistics',
  isSelected: true,
  width: 30,
  height: 30,
};
