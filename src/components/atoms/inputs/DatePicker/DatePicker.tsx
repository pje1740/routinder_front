import React, { ButtonHTMLAttributes, useState } from 'react';
import Datepicker from 'react-datepicker';
import classNames from 'classnames';
import { InformationCircleIcon } from '@heroicons/react/outline';

import Text from '@/components/atoms/texts/Text';
import { FontSize, FontWeight } from '@/styles/styleConstants';
import CalendarIcon from '@/assets/icons/CalendarIcon';
import Modal from '@/components/molecules/popups/Modal';

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

const GUIDES = [
  '루틴은 하루에 최대 6개 등록 가능합니다.',
  '모든 루틴은 최소 일주일은 진행해야 합니다.',
  '투데이 이전 날짜는 루틴 등록할 수 없습니다.',
  '투데이 기준 90일 이후에는 루틴을 등록할 수 없습니다. ',
];
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const liClasses = classNames(['text-xs', 'my-2']);

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClickButton={() => setIsModalOpen(false)}
          title="날짜 등록 시 유의사항"
          buttonLabel="닫기"
        >
          <ol className="list-decimal list-inside">
            {GUIDES.map((guide) => (
              <li className={liClasses}>{guide}</li>
            ))}
          </ol>
        </Modal>
      )}
      <Datepicker
        selected={selectedDate}
        onChange={handleStartDateChange}
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        customInput={<CustomInput />}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const buttonClasses = classNames();

          return (
            <div className="relative flex justify-center mb-1 bg-white">
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
              <InformationCircleIcon
                onClick={() => setIsModalOpen(true)}
                className="absolute w-5 cursor-pointer right-7 text-primary hover:text-primary-dark"
              />
            </div>
          );
        }}
        formatWeekDay={(day) => day.substr(0, 3)}
        dateFormat="yyyy. MM. dd"
        minDate={minDate}
        maxDate={maxDate}
      />
    </>
  );
};
export default DatePicker;
