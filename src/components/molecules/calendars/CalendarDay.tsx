import classNames from 'classnames';
import React from 'react';

import { CALENDAR_DAY_MIN_SIZE } from '@/styles/styleConstants';
import { CalendarType } from '@/@types/calendar';

export interface CalendarDayProps {
  type?: CalendarType;
  isContentEmpty: boolean;
  day: number;
  isToday: boolean;
  stickers: React.ReactNode[];
}

const CalendarDay = ({
  type = 'monthly',
  isContentEmpty = false,
  day,
  isToday,
  stickers,
}: CalendarDayProps) => {
  const wrapperClasses = classNames([
    'w-full h-full min-h-[100px]',
    'bg-white',
    'flex flex-col',
    isContentEmpty ? '' : 'hover:bg-gray-light active:bg-gray-dark',
  ]);
  const gridClasses = classNames([
    'grid gap-x-1',
    'grid-cols-2',
    'grid-rows-3',
    'w-full h-full',
    'px-1',
  ]);
  const stickerWrapperClasses = classNames(['grid justify-center content-center']);
  const dayWrapperClasses = classNames([
    'flex justify-center content-center px-2 py-1',
    'text-2xs',
  ]);
  const daySpanClasses = classNames([
    'flex justify-center align-middle h-full w-full rounded-md',
    !isToday && !isContentEmpty ? 'text-black' : 'text-white',
    isToday && !isContentEmpty ? 'bg-primary' : '',
    isContentEmpty ? 'text-gray-dark' : '',
  ]);

  return (
    <div className={wrapperClasses} style={{ minHeight: CALENDAR_DAY_MIN_SIZE[type] }}>
      <div className={dayWrapperClasses}>
        <span className={daySpanClasses}>{day}</span>
      </div>
      {!isContentEmpty && (
        <div className={gridClasses}>
          {stickers.map((sticker, i) => (
            <div key={`${day + i}`} className={stickerWrapperClasses}>
              {sticker}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
