import React from 'react';
import { Story, Meta } from '@storybook/react';

import ToggleChip, { SelectionChipPropsType } from './ToggleChip';

export default {
  title: 'Atom/Button/ToggleChip',
  component: ToggleChip,
} as Meta;

const Template: Story<SelectionChipPropsType> = (args) => <ToggleChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '월',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '월',
  disabled: true,
};
