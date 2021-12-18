import React from 'react';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]:
    'hover:bg-primary hover:text-white hover:border-transparent active:bg-gray-light active:text-white active:border-transparent ',
};

export interface StrokeButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
}

const StrokeButton: React.FC<StrokeButtonPropsType> = ({
  className,
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
}: StrokeButtonPropsType) => {
  const classes = classNames(
    className,
    'border-2',
    'box-border',
    'rounded-full',
    disabled ? 'text-gray-light' : 'text-primary',
    'px-5',
    'py-1',
    'focus:outline-none',
    'shadow-md',
    VARIANT_MAPS[variant],
    FONT_SIZE_MAPS[fontSize],
  );

  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" className={classes} onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default StrokeButton;
