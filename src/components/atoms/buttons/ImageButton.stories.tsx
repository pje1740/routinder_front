import React from 'react';
import { Story, Meta } from '@storybook/react';

import ImageButton, { ImageButtonPropsType } from './ImageButton';

export default {
  title: 'Atom/Button/ImageButton',
  component: ImageButton,
} as Meta;

const Template: Story<ImageButtonPropsType> = (args) => <ImageButton {...args} />;

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
