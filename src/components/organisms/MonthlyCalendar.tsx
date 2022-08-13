import classNames from 'classnames';
import React, { useCallback } from 'react';
import CalendarDay from '@/components/molecules/calendars/CalendarDay';
import { getMonthInfo } from '@/utils/date';
import ImageIcon from '@/components/atoms/buttons/ImageIcon';
import { Day, StickerStamp } from '@/@types/calendar';

import useDate from '@/hooks/useDate';

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface MonthlyCalendarProps {
  // 이벤트가 탑제된 스티커들? 일에 해당하는
  year: number;
  month: number;
  days: Day[];
}

const MonthlyCalendar = ({ days, year, month }: MonthlyCalendarProps) => {
  const { isToday } = useDate();
  const { rowsNum, totalDays, lastMonthDays, nextMonthDays } = getMonthInfo(year, month);

  const dayLabelsWrapperClasses = classNames(['grid', 'grid-cols-7 grid-rows-1', 'mb-2']);
  const dayLabelClasses = classNames(['flex', 'justify-center', 'text-xs']);

  const calendarWrapperClasses = classNames([
    'group',
    'grid',
    `grid-cols-7 grid-rows-${rowsNum}`,
    'gap-px',
    'bg-gray-light',
    'w-full h-full',
    'border border-solid border-gray-light rounded-xl overflow-hidden',
  ]);

  const getDayData = useCallback(
    (day: number) => {
      const dayData = days[day - 1];
      if (!dayData) return [];

      return dayData.stickerStamps;
    },
    [days],
  );

  const generateDay = (day: number, isContentEmpty: boolean) => {
    const stickerStamps = getDayData(day);
    const stickers = stickerStamps.map((stickerStamp) => (
      <div>
        <ImageIcon
          size="sm"
          imageLink={stickerStamp.routineIconLink}
          isTransparent={false}
          onClick={() => console.log(`sticker clicked for ${day} ${stickerStamp.routineName}`)}
        />
      </div>
    ));

    return (
      <div>
        <CalendarDay
          day={day}
          isToday={isToday(day, month, year)}
          stickers={stickers}
          isContentEmpty={isContentEmpty}
        />
      </div>
    );
  };

  return (
    <>
      <div className={dayLabelsWrapperClasses}>
        {DAY_LABELS.map((label) => (
          <span className={dayLabelClasses}>{label}</span>
        ))}
      </div>
      <div className={calendarWrapperClasses}>
        {lastMonthDays.map((day) => generateDay(day, true))}
        {totalDays.map((day) => generateDay(day, false))}
        {nextMonthDays.map((day) => generateDay(day, true))}
      </div>
    </>
  );
};

export default MonthlyCalendar;
