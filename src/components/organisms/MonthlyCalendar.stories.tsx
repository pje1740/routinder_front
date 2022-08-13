import React from 'react';
import { Story, Meta } from '@storybook/react';

import MonthlyCalendar, { MonthlyCalendarProps } from './MonthlyCalendar';

import { Day, StickerStamp } from '@/@types/calendar';

export default {
  title: 'Organisms/Calendar/MonthlyCalendar',
  component: MonthlyCalendar,
} as Meta;

const Template: Story<MonthlyCalendarProps> = (args) => (
  <div style={{ width: '300px', height: '600px' }}>
    <MonthlyCalendar {...args} />
  </div>
);

const testStickers: StickerStamp[] = [
  { routineName: '방 청소', routineIconLink: '/stickers/21.png' },
  { routineName: '장 보기', routineIconLink: '/stickers/22.png' },
  { routineName: '운동하기', routineIconLink: '/stickers/23.png' },
  { routineName: '코딩하기', routineIconLink: '/stickers/24.png' },
  { routineName: '일찍 자기', routineIconLink: '/stickers/25.png' },
];
const days: Day[] = Array.from(Array(31));
days[1] = { day: 1, stickerStamps: testStickers };
days[12] = { day: 12, stickerStamps: testStickers };
days[23] = { day: 23, stickerStamps: testStickers };

export const Default = Template.bind({});
Default.args = {
  days,
  year: 2022,
  month: 8,
};
