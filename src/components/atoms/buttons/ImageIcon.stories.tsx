import React from 'react';
import { Story, Meta } from '@storybook/react';

import ImageIcon, { ImageIconPropsType } from './ImageIcon';

export default {
  title: 'Atom/Button/ImageIcon',
  component: ImageIcon,
} as Meta;

const Template: Story<ImageIconPropsType> = (args) => <ImageIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageLink: '/stickers/24.png',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  imageLink: '/stickers/01.png',
  size: 'sm',
  isTransparent: true,
};
