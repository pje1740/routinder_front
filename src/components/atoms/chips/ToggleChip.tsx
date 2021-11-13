import React from 'react';
import classNames from 'classnames';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]: 'text-primary bg-white border-primary hover:bg-primary-dark hover:text-white',
};

export enum FontSize {
  XS = 'xs',
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

const FONT_SIZE_MAPS = {
  [FontSize.XS]: 'text-xs',
  [FontSize.SM]: 'text-sm',
  [FontSize.BASE]: 'text-base',
  [FontSize.LG]: 'text-lg',
  [FontSize.XL]: 'text-xl',
  [FontSize['2XL']]: 'text-2xl',
};

export interface SelectionChipPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
}

const ToggleChip: React.FC<SelectionChipPropsType> = ({
  className,
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
}: SelectionChipPropsType) => {
  const classes = classNames(
    className,
    VARIANT_MAPS[variant],
    FONT_SIZE_MAPS[fontSize],
    'rounded-full',
    'px-4',
    'py-1',
    'focus:outline-none',
    'active:bg-gray-light',
    'active:border-none',
    'border',
    'border-solid',
    'shadow-md',
    disabled
      ? 'text-gray-light border-none hover:bg-white hover:text-white pointer-events-none'
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

export default ToggleChip;
