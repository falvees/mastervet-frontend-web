/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';
import { useFormContext } from 'react-hook-form';
import StyledContentLoader from 'styled-content-loader';
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
  isLoading?: Boolean;
};

const Input: React.FC<InputProps> = ({
  name,
  isLoading,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  colorPlaceholder,
  backgroundColor,
  label,
  ...rest
}) => {
  const { getValues, register, watch } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, [getValues, name]);

  useEffect(() => {
    watch(name, setIsFilled(!!watch(name)));
  }, [name, watch]);

  console.log('3', isLoading);

  return (
    <StyledContentLoader isLoading={!!isLoading}>
      <Container
        isLoading={!!isLoading}
        className="input-root"
        colorPlaceholder={colorPlaceholder}
        backgroundColor={backgroundColor}
        isIcon={!!Icon}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={HandleInputFocus}
        onBlur={HandleInputBlur}
      >
        {Icon && (
          <ButtonIcon tabIndex="-1">
            <Icon color={iconColor || '#bfbfbf'} />
          </ButtonIcon>
        )}
        <InputMask
          mask={mask}
          ref={register}
          {...rest}
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <label>{label}</label>
      </Container>
    </StyledContentLoader>
  );
};
export default Input;
