import React from 'react';
import classNames from 'classnames';

export enum TextColor{
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  LIGHTGRAY = 'lightgray',
  DARKGRAY = 'darkgray',
  PRIMARY = 'primary',
}

const TEXT_COLOR_MAPS = {
  [TextColor.BLACK]: 'text-black',
  [TextColor.WHITE]: 'text-white',
  [TextColor.RED]: 'text-error',
  [TextColor.LIGHTGRAY]: 'text-gray-light',
  [TextColor.DARKGRAY]: 'text-gray-dark',
  [TextColor.PRIMARY]: 'text-primary',
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

export interface NormalTextPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  fontSize?: FontSize;
  textColor?: TextColor;
}

const NormalText: React.FC<NormalTextPropsType> = ({
  className,
  label,
  fontSize = FontSize.SM,
  textColor = TextColor.BLACK,
}: NormalTextPropsType) => {
  const classes = classNames(
    className,
    'font-sans',
    'font-normal',
    FONT_SIZE_MAPS[fontSize],
    TEXT_COLOR_MAPS[textColor],
  );

  return (
    <div className={classes}>
      {label}
    </div>
  );
};

export default NormalText;
