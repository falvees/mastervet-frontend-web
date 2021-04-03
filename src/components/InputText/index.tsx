/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { InputAdornment } from '@material-ui/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { ButtonIcon } from '../InputLabelPure/styles';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id?: string;
  placeholder?: string;
  colorPlaceholder?: string;
  label?: string;
  defaultValue?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
};

const InputText: React.FC<InputProps> = ({
  name,
  id,
  placeholder,
  colorPlaceholder,
  label,
  defaultValue,
  icon: Icon,
  iconColor,
  backgroundColor,
  borderColor,
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
      name={name}
      id={id}
      placeholder={placeholder}
      colorPlaceholder={colorPlaceholder}
      label={label}
      defaultValue={defaultValue}
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      inputRef={register()}
      onBlur={HandleInputBlur}
      isFilled={isFilled}
      multiline
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {Icon && (
              <ButtonIcon tabIndex="-1">
                <Icon color={iconColor || '#bfbfbf'} />
              </ButtonIcon>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};
export default InputText;
