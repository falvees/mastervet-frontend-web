/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';
import { ButtonIcon, Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  register: any;
  getValues: any;
};

const Input: React.FC<InputProps> = ({
  name,
  register,
  getValues,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, []);

  return (
    <Container
      isIcon={!!Icon}
      isFilled={isFilled}
      isFocused={isFocused}
      onFocus={HandleInputFocus}
      onBlur={HandleInputBlur}
    >
      {Icon && (
        <ButtonIcon>
          <Icon color={iconColor || '#bfbfbf'} />
        </ButtonIcon>
      )}
      <label className="noselect" htmlFor={name}>
        {placeholder}
      </label>
      <InputMask mask={mask} ref={register} {...rest} id={name} name={name} />
    </Container>
  );
};
export default Input;
