import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addYears } from 'date-fns';

import DatePicker, { DatePickerPropsType } from './DatePicker';

export default {
  title: 'Atom/Input/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerPropsType> = (args) => (
  <div className="w-full h-full">
    <DatePicker {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultDate: new Date(),
  minDate: new Date(),
  maxDate: addYears(new Date(), 1),
};
