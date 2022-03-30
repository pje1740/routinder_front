import React from 'react';

import MenuIcon from '@/assets/icons/MenuIcon';

type MenuIconType = 'calendar' | 'profile' | 'setting' | 'statistics';

export interface IconButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isSelected?: boolean;
  menuType: MenuIconType;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonPropsType> = ({
  onClick,
  isSelected = false,
  menuType,
}: IconButtonPropsType) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button type="button" onClick={handleClick}>
      <MenuIcon color={isSelected ? '#8447FF' : '#BDBDBD'} type={menuType} />
    </button>
  );
};

export default IconButton;
