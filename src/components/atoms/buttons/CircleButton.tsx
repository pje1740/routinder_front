import React from 'react';
import classNames from 'classnames';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]:
    'h-12 w-12 bg-primary hover:bg-primary-dark active:bg-primary-darkest disabled:bg-gray-light',
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

export interface CircleButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
}

const CircleButton: React.FC<CircleButtonPropsType> = ({
  className,
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
}: CircleButtonPropsType) => {
  const classes = classNames(
    className,
    'flex',
    'justify-center',
    'items-center',
    'text-white',
    'rounded-full',
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

export default CircleButton;
