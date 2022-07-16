import classNames from 'classnames';
import React from 'react';

export interface CalendarDayProps {
  type: 'monthly' | 'weekly';
  day: number;
  isToday: boolean;
  stickers: React.ReactNode[];
}

const CalendarDay = ({ type = 'monthly', day, isToday, stickers }: CalendarDayProps) => {
  const wrapperClasses = classNames([
    'group',
    'w-full h-full',
    'border border-solid border-gray-dark',
    'flex flex-col',
    'active:bg-gray-dark',
  ]);
  const gridClasses = classNames([
    'grid',
    'grid-cols-2',
    'grid-rows-3',
    'w-full h-full group-hover:bg-gray-light ',
  ]);
  const stickerWrapperClasses = classNames(['grid justify-center content-center']);
  const dayWrapperClasses = classNames([
    'flex justify-center content-center p-2',
    'group-hover:bg-gray-light ',
  ]);
  const daySpanClasses = classNames([
    'flex justify-center align-middle h-full w-full rounded-md',
    isToday ? 'bg-primary group-hover:bg-gray-light text-white' : '',
  ]);

  return (
    <div className={wrapperClasses}>
      <div className={dayWrapperClasses}>
        <span className={daySpanClasses}>{day}</span>
      </div>
      <div className={gridClasses}>
        {stickers.map((sticker) => (
          <div className={stickerWrapperClasses}>{sticker}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
