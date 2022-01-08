import React, { ButtonHTMLAttributes } from 'react';
import Datepicker from 'react-datepicker';
import classNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';

export interface DatePickerPropsType {
  startDate: Date;
  onChangeStartDate: (date: Date) => void;
}

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
        {props.value}
      </button>
    );
  },
);

const DatePicker = ({ startDate, onChangeStartDate }: DatePickerPropsType) => (
  <>
    <Datepicker selected={startDate} onChange={onChangeStartDate} customInput={<CustomInput />} />
  </>
);
export default DatePicker;
