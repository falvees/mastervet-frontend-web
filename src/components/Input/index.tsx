import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
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
}

const Input: React.FC<InputProps> = ({
  name,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  ...rest
}) => {
  const { setValue, getValues, register, control } = useFormContext();
  const inputRef = useRef(null);
  return (
    <Container>
      {Icon && <Icon />}
      <InputMask mask={mask} ref={register} {...rest} id={name} name={name} />
    </Container>
  );
};
export default Input;
