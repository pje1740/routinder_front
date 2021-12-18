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
};

export const Profile = Template.bind({});
Profile.args = {
  menuType: 'profile',
  isSelected: true,
};

export const Setting = Template.bind({});
Setting.args = {
  menuType: 'setting',
  isSelected: true,
};

export const Statistics = Template.bind({});
Statistics.args = {
  menuType: 'statistics',
  isSelected: true,
};
