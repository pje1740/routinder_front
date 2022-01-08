import React from 'react';
import { Story, Meta } from '@storybook/react';

import DatePicker, { DatePickerPropsType } from './DatePicker';

export default {
  title: 'Atom/Input/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerPropsType> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
};
