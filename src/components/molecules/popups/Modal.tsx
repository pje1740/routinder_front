import React, { useRef } from 'react';
import { useClickAway } from 'react-use';
import classNames from 'classnames';

import OpaqueButton from '@/components/atoms/buttons/OpaqueButton';

export interface ModalProps {
  isOpen: boolean;
  onClickButton?: () => void;
  title?: string;
  description?: React.ReactChild;
  children?: React.ReactChild;
  buttonLabel?: string;
  enableClickAway?: boolean;
  enableBackground?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClickButton,
  title,
  description,
  buttonLabel,
  children,
  enableClickAway = true,
  enableBackground = true,
}) => {
  const modalRef = useRef(null);

  useClickAway(modalRef, () => {
    if (enableClickAway) onClickButton?.();
  });

  const wrapperClasses = classNames(['absolute', 'z-50']);
  const backgroundClasses = classNames([
    'w-screen',
    'h-screen',
    'bg-black',
    'bg-opacity-20',
    'flex',
    'justify-center',
    'items-center',
  ]);
  const overlayClasses = classNames([
    'flex',
    'flex-col',
    'bg-white',
    'shadow-md',
    'w-80',
    'h-auto',
    'rounded-2xl',
    'p-6',
  ]);
  const titleClasses = classNames(['text-sm', 'mb-2', 'font-medium']);

  return (
    <div className={wrapperClasses}>
      {isOpen && (
        <div className={enableBackground ? backgroundClasses : ''}>
          <div>
            <div ref={modalRef} className={overlayClasses}>
              {title && <p className={titleClasses}>{title}</p>}
              {children}
              {description && <div className="text-sm">{description}</div>}
              {buttonLabel && onClickButton && (
                <OpaqueButton
                  label={buttonLabel}
                  onClick={onClickButton}
                  className="self-end mt-4"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
