/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  options: Array<{ tipo: string }>;
}

const Select: React.FC<SelectProps> = ({
  name,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  options,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  const onTagsChange = e => {
    console.log(e.value);
  };
  return (
    <Container
      className="select-custom"
      id="gender"
      options={options}
      getOptionLabel={(option: any) => option.tipo}
      onChange={(event, item: any) => {
        console.log(item.id);
      }}
      renderInput={params => (
        <TextField {...params} label="Sexo" variant="outlined" />
      )}
    />
  );
};
export default Select;
