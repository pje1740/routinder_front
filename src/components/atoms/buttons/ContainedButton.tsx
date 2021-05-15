import React from 'react';
import classNames from 'classnames';

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]: 'bg-primary hover:bg-primary-dark active:bg-primary-darkest',
  [Variant.SECONDARY]: 'bg-secondary hover:bg-secondary-dark active:bg-secondary-darkest',
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

export interface ContainedButtonProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
}

const ContainedButton: React.FC<ContainedButtonProps> = (props: ContainedButtonProps) => {
  const { className, label, variant = Variant.PRIMARY, fontSize = FontSize.SM } = props;
  const classes = classNames(
    className,
    'text-white',
    'rounded-full',
    'px-5',
    'focus:outline-none',
    'shadow-md',
    VARIANT_MAPS[variant],
    FONT_SIZE_MAPS[fontSize],
  );

  return (
    <button type="button" className={classes}>
      {label}
    </button>
  );
};

export default ContainedButton;
