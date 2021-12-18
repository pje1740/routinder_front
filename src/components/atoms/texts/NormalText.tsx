import React from 'react';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export enum TextColor {
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

export interface NormalTextPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
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

  return <div className={classes}>{label}</div>;
};

export default NormalText;
