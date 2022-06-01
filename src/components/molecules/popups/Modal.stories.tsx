import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Molecules/Popups/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return <Modal {...args} isOpen={isOpen} onClickButton={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {
  title: '경고',
  description: <p>이 창을 닫으시겠습니까? </p>,
  buttonLabel: '확인',
  enableClickAway: false,
};

export const Empty = Template.bind({});
Empty.args = {
  enableClickAway: true,
  enableBackground: false,
};
