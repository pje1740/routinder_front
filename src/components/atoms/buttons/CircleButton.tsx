import React from 'react';
import classNames from 'classnames';
import { PlusIcon } from '@heroicons/react/solid';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]:
    'h-15 w-15 bg-primary hover:bg-primary-dark active:bg-primary-darkest disabled:bg-gray-light',
};

export interface CircleButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant;
  onClick: () => void;
  disabled?: boolean;
}

const CircleButton: React.FC<CircleButtonPropsType> = ({
  className,
  variant = Variant.PRIMARY,
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
  );

  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" className={classes} onClick={handleClick} disabled={disabled}>
      <PlusIcon className="h-full w-full" />
    </button>
  );
};

export default CircleButton;
