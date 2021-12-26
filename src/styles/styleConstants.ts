export enum FontSize {
  XS = 'xs',
  SM = 'sm',
  BASE = 'base',
  LG = 'lg',
  XL = 'xl',
  '2XL' = '2xl',
}

export const FONT_SIZE_MAPS = {
  [FontSize.XS]: 'text-xs',
  [FontSize.SM]: 'text-sm',
  [FontSize.BASE]: 'text-base',
  [FontSize.LG]: 'text-lg',
  [FontSize.XL]: 'text-xl',
  [FontSize['2XL']]: 'text-2xl',
};

export enum TextColor {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  LIGHTGRAY = 'lightgray',
  DARKGRAY = 'darkgray',
  PRIMARY = 'primary',
}

export const TEXT_COLOR_MAPS = {
  [TextColor.BLACK]: 'text-black',
  [TextColor.WHITE]: 'text-white',
  [TextColor.RED]: 'text-error',
  [TextColor.LIGHTGRAY]: 'text-gray-light',
  [TextColor.DARKGRAY]: 'text-gray-dark',
  [TextColor.PRIMARY]: 'text-primary',
};
