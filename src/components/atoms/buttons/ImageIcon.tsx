import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { CALENDAR_ICON_SIZE } from '@/styles/styleConstants';

export interface ImageIconPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: 'sm' | 'md' | 'lg';
  imageLink: string;
  isTransparent?: boolean;
  onClick: () => void;
}

const ImageIcon: React.FC<ImageIconPropsType> = ({
  onClick,
  size,
  imageLink,
  isTransparent = false,
}: ImageIconPropsType) => {
  const handleClick = () => {
    onClick();
  };

  const buttonClasses = classNames(['inline-block', 'h-fit']);

  return (
    <button type="button" onClick={handleClick} className={buttonClasses}>
      <Image
        width={CALENDAR_ICON_SIZE[size]}
        height={CALENDAR_ICON_SIZE[size]}
        className={isTransparent ? 'opacity-20' : ''}
        src={imageLink}
        alt="sticker stamp"
      />
    </button>
  );
};

export default ImageIcon;
