/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

const InputText: React.FC<InputProps> = ({
  defaultValue,
  name,
  icon: Icon,
  iconColor,
  placeholder,
  colorPlaceholder,
  backgroundColor,
  label,
  ...rest
}) => {
  const { setValue, getValues, register, watch } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, []);

  useEffect(() => {
    setIsFilled(!!getValues(name));
  }, []);

  console.log(getValues(name));
  return (
    <Container
      onBlur={HandleInputBlur}
      isFilled={isFilled}
      id="outlined-textarea"
      label={label}
      multiline
      inputRef={register}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};
export default InputText;
