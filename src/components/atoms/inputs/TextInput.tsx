import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import classNames from 'classnames';

import { FontSize, FONT_SIZE_MAPS } from '@/styles/styleConstants';

export interface TextInputPropsType
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  text: string;
  fontSize: FontSize;
  width?: number;
  placeholder: string;
  maxLength: number;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputPropsType> = ({
  className,
  fontSize = FontSize.BASE,
  width,
  maxLength,
  placeholder,
  onChangeText,
}) => {
  const [text, setText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useClickAway(inputRef, () => {
    setIsInputFocused(false);
  });

  useEffect(() => {
    if (text.length > maxLength) {
      setError(true);
    } else {
      setError(false);
    }
  }, [text]);

  const inputClasses = classNames(
    className,
    'px-3',
    'py-1',
    width ? '' : 'w-full',
    'text-base',
    'rounded-full',
    'border-2',
    'border-solid',
    error ? 'border-red-600' : 'focus:border-primary border-gray-light',
    'outline-none',
    FONT_SIZE_MAPS[fontSize],
  );

  const pClasses = classNames(
    'self-end',
    'text-sm',
    'pr-3',
    error ? 'text-red-600' : 'text-primary',
    isInputFocused ? 'text-primary' : 'text-gray-light',
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChangeText(e.target.value);
  };

  return (
    <div style={width ? { width: `${width}px` } : {}} className={classNames('flex', 'flex-col')}>
      <input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        className={inputClasses}
        placeholder={placeholder}
        onFocus={() => {
          setIsInputFocused(true);
        }}
      />
      <div className={classNames('flex', 'w-full', 'justify-between')}>
        <p className={classNames('self-start', 'pl-3', 'text-sm', 'text-red-600')}>
          {`${error ? '*최대 18자 (띄어쓰기 포함) 입력 가능합니다.' : ''}`}
        </p>
        <p className={pClasses}>{`${text.length} / ${maxLength}자`}</p>
      </div>
    </div>
  );
};

export default TextInput;
