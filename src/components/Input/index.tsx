import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  register: any;
  getValues: any;
}

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
  const inputRef = useRef(null);
  return (
    <Container>
      {Icon && <Icon />}
      <InputMask mask={mask} ref={register} {...rest} id={name} name={name} />
    </Container>
  );
};
export default Input;
