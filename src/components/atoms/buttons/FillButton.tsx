import React from 'react';
import classNames from 'classnames';

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
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
}: FillButtonPropsType) => {
  const classes = classNames(
    className,
    'text-white',
    'rounded-full',
    'px-5',
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
      {label}
    </button>
  );
};

export default FillButton;
