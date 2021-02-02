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
  watch?: any;
  register?: any;
};

const Input: React.FC<InputProps> = ({
  setValue,
  watch,
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

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!watch(name));
  }, [watch, name]);

  useEffect(() => {
    watch(name, setIsFilled(!!watch(name)));
  }, [name, watch]);

  // console.log("teste")

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
  );
};
export default Input;
