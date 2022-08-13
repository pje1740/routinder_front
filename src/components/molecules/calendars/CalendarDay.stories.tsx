import React from 'react';
import { Story, Meta } from '@storybook/react';

import ImageIcon from '@/components/atoms/buttons/ImageIcon';
import CalendarDay, { CalendarDayProps } from './CalendarDay';

export default {
  title: 'Molecules/Calendar/CalendarDay',
  component: CalendarDay,
} as Meta;

const Template: Story<CalendarDayProps> = (args) => (
  <div style={{ width: '100px', height: '200px' }}>
    <CalendarDay {...args} />
  </div>
);

const stickers = Array.from(Array(6)).map((val, i) => (
  <div>
    <ImageIcon
      size="sm"
      imageLink={`/stickers/2${i + 1}.png`}
      isTransparent={false}
      onClick={() => console.log(`sticker 2${i + 1}`)}
    />
  </div>
));

export const Today = Template.bind({});
Today.args = {
  day: 12,
  isToday: true,
  stickers,
};

export const NotToday = Template.bind({});
NotToday.args = {
  day: 2,
  isToday: false,
  stickers,
};
