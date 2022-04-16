import React, { ButtonHTMLAttributes, useState } from 'react';
import Datepicker from 'react-datepicker';
import classNames from 'classnames';

import Text from '@/components/atoms/texts/Text';
import { FontSize, FontWeight } from '@/styles/styleConstants';
import CalendarIcon from '@/assets/icons/CalendarIcon';

import './style.scss';

const CustomInput = React.forwardRef(
  (
    props: React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const classes = classNames(
      'px-3 py-1',
      'rounded-full',
      'border-solid border-primary border-2',
      'text-sm',
    );

    return (
      <button className={classes} type="button" onClick={props.onClick} ref={ref}>
        {`${props.value}`}
      </button>
    );
  },
);

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: {
  date: Date;
  decreaseMonth: React.MouseEventHandler<HTMLButtonElement>;
  increaseMonth: React.MouseEventHandler<HTMLButtonElement>;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}) => {
  const buttonClasses = classNames();

  return (
    <div className="flex justify-center mb-1 bg-white">
      <div className="flex flex-row items-center justify-between w-1/2">
        <button
          type="button"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          className={buttonClasses}
        >
          <CalendarIcon type="left" />
        </button>
        <Text
          fontSize={FontSize.XS}
          fontWeight={FontWeight.BOLD}
          label={`${date.getFullYear()}. ${date.getMonth() + 1}`}
          className="pt-0.5"
        />
        <button
          type="button"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          className={buttonClasses}
        >
          <CalendarIcon type="right" />
        </button>
      </div>
    </div>
  );
};

export interface DatePickerPropsType {
  defaultDate?: Date;
  onChangeSelectedDate?: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
}

const DatePicker = ({
  defaultDate,
  onChangeSelectedDate,
  minDate,
  maxDate,
}: DatePickerPropsType) => {
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate || new Date());
  const handleStartDateChange = (date: Date) => {
    setSelectedDate(date);
    onChangeSelectedDate?.(date);
  };

  return (
    <>
      <Datepicker
        selected={selectedDate}
        onChange={handleStartDateChange}
        showPopperArrow={false}
        customInput={<CustomInput />}
        renderCustomHeader={CustomHeader}
        formatWeekDay={(day) => day.substr(0, 3)}
        dateFormat="yyyy. MM. dd"
        minDate={minDate}
        maxDate={maxDate}
      />
    </>
  );
};
export default DatePicker;
