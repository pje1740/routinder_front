import React from 'react';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]:
    'bg-primary hover:bg-primary-dark active:bg-primary-darkest disabled:bg-gray-dark',
  [Variant.SECONDARY]:
    'bg-secondary hover:bg-secondary-dark active:bg-secondary-darkest disabled:bg-gray-dark',
};
export interface FillButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
}

const FillButton: React.FC<FillButtonPropsType> = ({
  className,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
  children,
}: FillButtonPropsType) => {
  const classes = classNames(
    className,
    'text-white',
    'rounded-full',
    'px-5',
    'py-1',
    'focus:outline-none',
    disabled ? '' : 'shadow-md',
    VARIANT_MAPS[variant],
    FONT_SIZE_MAPS[fontSize],
  );

  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" className={classes} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default FillButton;
