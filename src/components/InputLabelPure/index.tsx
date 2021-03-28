/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { InputHTMLAttributes, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';
import { ButtonIcon, Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  colorPlaceholder?: string;
  backgroundColor?: string;
  label?: string;
  iconColor?: string;
  mask?: string;
  defaultValue?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  colorPlaceholder,
  backgroundColor,
  label,
  ...rest
}) => {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={props => (
        <Container
          className="input-root"
          colorPlaceholder={colorPlaceholder}
          backgroundColor={backgroundColor}
          isIcon={!!Icon}
          isFilled={!!props.value}
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          label={!!label}
        >
          <fieldset>
            <legend>
              <span>{label}</span>
            </legend>
            {Icon && (
              <ButtonIcon tabIndex="-1">
                <Icon color={iconColor || '#bfbfbf'} />
              </ButtonIcon>
            )}
            <InputMask
              mask={mask}
              {...rest}
              placeholder={placeholder}
              {...props}
            />

            <label>{label}</label>
          </fieldset>
        </Container>
      )}
    />
  );
};
export default Input;
