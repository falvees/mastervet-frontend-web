/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { TextField } from '@material-ui/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import IntlCurrencyInput from 'react-intl-currency-input';
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
  setValue?: any;
  getValues?: any;
  register?: any;
  defaultValue?: string;
};

const InputMoney: React.FC<InputProps> = ({
  defaultValue,
  setValue,
  getValues,
  register,
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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, []);
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();

    console.log(value); // value without mask (ex: 1234.56)
    console.log(maskedValue); // masked value (ex: R$1234,56)
  };
  useEffect(() => {
    getValues(name, setIsFilled(!!getValues(name)));
  }, []);

  return (
    <Container
      className="input-root"
      colorPlaceholder={colorPlaceholder}
      backgroundColor={backgroundColor}
      isIcon={!!Icon}
      isFilled={isFilled}
      isFocused={isFocused}
      onFocus={HandleInputFocus}
      onBlur={HandleInputBlur}
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
        <IntlCurrencyInput
          currency="BRL"
          config={currencyConfig}
          onChange={handleChange}
          defaultValue={defaultValue}
          ref={register}
          {...rest}
          id={name}
          name={name}
        />
        <label>{label}</label>
      </fieldset>
    </Container>
  );
};
export default InputMoney;
