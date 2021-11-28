import React from 'react';
import Image from 'next/image';

import CalendarIcon from '@/assets/icons/menu_calendar.png';
import CalendarIconGrey from '@/assets/icons/menu_calendar_grey.png';
import ProfileIcon from '@/assets/icons/menu_profile.png';
import ProfileIconGrey from '@/assets/icons/menu_profile_grey.png';
import SettingIcon from '@/assets/icons/menu_setting.png';
import SettingIconGrey from '@/assets/icons/menu_setting_grey.png';
import StatisticsIcon from '@/assets/icons/menu_statistics.png';
import StatisticsIconGrey from '@/assets/icons/menu_statistics_grey.png';

type MenuIconType = 'calendar' | 'profile' | 'setting' | 'statistics';

export interface IconButtonPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isSelected?: boolean;
  menuType: MenuIconType;
  width: number;
  height: number;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonPropsType> = ({
  onClick,
  isSelected = false,
  width,
  height,
  menuType,
}: IconButtonPropsType) => {
  const handleClick = () => {
    onClick();
  };

  const selectedIcons = {
    calendar: CalendarIcon,
    profile: ProfileIcon,
    setting: SettingIcon,
    statistics: StatisticsIcon,
  };

  const unselectedIcons = {
    calendar: CalendarIconGrey,
    profile: ProfileIconGrey,
    setting: SettingIconGrey,
    statistics: StatisticsIconGrey,
  };

  return (
    <button type="button" onClick={handleClick}>
      <Image
        width={width}
        height={height}
        src={isSelected ? selectedIcons[menuType] : unselectedIcons[menuType]}
        alt={menuType}
      />
    </button>
  );
};

export default IconButton;
