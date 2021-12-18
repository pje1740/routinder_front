import React from 'react';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export enum Variant {
  PRIMARY = 'primary',
}

const VARIANT_MAPS = {
  [Variant.PRIMARY]: 'bg-primary bg-opacity-10 hover:bg-opacity-30',
};

export interface OpaqueButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: Variant;
  fontSize?: FontSize;
  onClick: () => void;
  disabled?: boolean;
}

const OpaqueButton: React.FC<OpaqueButtonPropsType> = ({
  className,
  label,
  variant = Variant.PRIMARY,
  fontSize = FontSize.SM,
  onClick,
  disabled = false,
}: OpaqueButtonPropsType) => {
  const classes = classNames(
    className,
    'text-primary',
    'rounded-md',
    'px-5',
    'focus:outline-none',
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

export default OpaqueButton;
