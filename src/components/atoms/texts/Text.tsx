import React from 'react';
import classNames from 'classnames';

import {
  FontSize,
  FontWeight,
  FONT_SIZE_MAPS,
  FONT_WEIGHT_MAPS,
  TextColor,
  TEXT_COLOR_MAPS,
} from '@/styles/styleConstants';

// 클래스처럼 필요한 형태의 텍스트 스타일을 정의
export enum TextType {
  H1 = 'h1',
  BODY = 'body',
}

const TEXT_TYPE_MAPS = {
  [TextType.H1]: 'text-2xl font-extrabold',
  [TextType.BODY]: 'text-base font-normal',
};

export interface TextPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  label: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textColor?: TextColor;
  textType?: TextType;
}

const NormalText: React.FC<TextPropsType> = ({
  className,
  label,
  fontSize = FontSize.SM,
  fontWeight = FontWeight.NORMAL,
  textColor = TextColor.BLACK,
  textType,
}: TextPropsType) => {
  const classes = classNames(
    className,
    'font-sans',
    'text-center',
    'align-middle',
    textType ? TEXT_TYPE_MAPS[textType] : '',
    FONT_SIZE_MAPS[fontSize],
    FONT_WEIGHT_MAPS[fontWeight],
    TEXT_COLOR_MAPS[textColor],
  );

  return <div className={classes}>{label}</div>;
};

export default NormalText;
