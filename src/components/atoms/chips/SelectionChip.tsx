import React from 'react';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]: 'bg-white hover:bg-primary hover:text-white',
};

export interface SelectionChipPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
  selected: boolean;
}

const SelectionChip: React.FC<SelectionChipPropsType> = ({
  className,
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
  selected = false,
}: SelectionChipPropsType) => {
  const classes = classNames(
    className,
    VARIANT_MAPS[variant],
    FONT_SIZE_MAPS[fontSize],
    'rounded-full',
    'px-3',
    'py-1',
    'focus:outline-none',
    'active:bg-gray-light',
    'active:border-none',
    'hover:border-primary',
    'border',
    'border-solid',
    'shadow-md',
    selected ? 'border-primary text-primary' : 'text-black border-transparent',
    disabled
      ? 'text-white bg-gray-dark border-none hover:bg-gray-dark hover:text-white pointer-events-none'
      : '',
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

export default SelectionChip;
