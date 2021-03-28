/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import NumberFormat from 'react-number-format';
import { Controller, useFormContext } from 'react-hook-form';
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

  defaultValue?: string;
};

const InputMoney: React.FC<InputProps> = ({
  defaultValue,

  name,
  icon: Icon,
  iconColor,
  colorPlaceholder,
  backgroundColor,
  label,
}) => {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const currencyFormatter = useCallback(value => {
    if (!Number(value)) return '';

    const amount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value / 100);

    return `${amount}`;
  }, []);

  return (
    <Controller
      render={({ onChange, ...props }) => (
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
            <NumberFormat
              decimalScale={2}
              decimalSeparator=","
              fixedDecimalScale
              format={currencyFormatter}
              thousandSeparator="."
              onValueChange={({ value }) => {
                onChange(value ? (Number(value) / 100).toFixed(2) : '');
              }}
              {...props}
              defaultValue={defaultValue}
            />
            <label>{label}</label>
          </fieldset>
        </Container>
      )}
      control={control}
      defaultValue={null}
      name={name}
    />
  );
};
export default InputMoney;
