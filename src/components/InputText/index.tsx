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

import { Container } from './styles';

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
  placeholder,
  colorPlaceholder,
  backgroundColor,
  label,
}) => {
  const { getValues, register } = useFormContext();

  const [isFilled, setIsFilled] = useState(true);

  const HandleInputBlur = useCallback(() => {
    setIsFilled(!!getValues(name));
  }, [getValues, name]);

  useEffect(() => {
    setIsFilled(!!getValues(name));
  }, [getValues, name]);

  return (
    <Container
      backgroundColor={backgroundColor}
      colorPlaceholder={colorPlaceholder}
      name={name}
      inputRef={register()}
      onBlur={HandleInputBlur}
      isFilled={isFilled}
      label={label}
      multiline
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};
export default InputText;
