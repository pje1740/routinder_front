import React from 'react';

type CalendarIconType = 'left' | 'right';

const LeftIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.49198 7.90376C0.82746 7.51845 0.827462 6.55888 1.49199 6.17357L10.4984 0.951396C11.1651 0.564845 12 1.04587 12 1.81649L12 12.2608C12 13.0315 11.1651 13.5125 10.4984 13.1259L1.49198 7.90376Z"
      fill="#8447FF"
    />
  </svg>
);

const RightIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.508 6.16973C11.1725 6.55504 11.1725 7.51461 10.508 7.89992L1.50161 13.1221C0.834942 13.5086 3.43149e-07 13.0276 3.76691e-07 12.257L8.31276e-07 1.81265C8.64817e-07 1.04203 0.834943 0.561008 1.50161 0.947559L10.508 6.16973Z"
      fill="#8447FF"
    />
  </svg>
);

interface CalendarIconProps {
  type: CalendarIconType;
}

const CalendarIcon = ({ type }: CalendarIconProps) => {
  switch (type) {
    case 'left':
      return <LeftIcon />;
    case 'right':
      return <RightIcon />;
    default:
      return <LeftIcon />;
  }
};

export default CalendarIcon;
