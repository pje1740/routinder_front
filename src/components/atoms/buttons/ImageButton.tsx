import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export interface ImageButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: 'sm' | 'md' | 'lg';
  imageLink: string;
  isTransparent?: boolean;
  onClick: () => void;
}

const ImageButton: React.FC<ImageButtonPropsType> = ({
  onClick,
  size,
  imageLink,
  isTransparent = false,
}: ImageButtonPropsType) => {
  const handleClick = () => {
    onClick();
  };

  const buttonWidth = {
    sm: 18,
    md: 30,
    lg: 36,
  };

  const buttonHeight = {
    sm: 18,
    md: 30,
    lg: 36,
  };

  return (
    <button type="button" onClick={handleClick}>
      <Image
        width={buttonWidth[size]}
        height={buttonHeight[size]}
        className={isTransparent ? 'opacity-20' : ''}
        src={imageLink}
        alt="sticker stamp"
      />
    </button>
  );
};

export default ImageButton;
