/* eslint-disable react/jsx-wrap-multilines */
import { FormControl, IconButton, InputAdornment } from '@material-ui/core';
import { TextField } from '@rmwc/textfield';
import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiUser } from 'react-icons/fi';
import { ThemeProvider } from '@rmwc/theme';
import { Container } from './styles';
import '@rmwc/textfield/styles';
import '@material/theme/dist/mdc.theme.css';
import '@rmwc/theme/theme.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const HandleOnFocus = useCallback(() => {
    console.log('Focado');
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
  return (
    <ThemeProvider
      options={{
        primary: '#8C8C8C',
        textPrimaryOnBackground: '#8C8C8C',
      }}
    >
      <Container
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={HandleInputBlur}
        outlined
        icon={<FiUser />}
        label={label}
        inputRef={inputRef}
      />
    </ThemeProvider>
    // <FormControl variant="outlined">
    //   <Container
    //     placeholder="teste"
    //     id="outlined-adornment-password"
    //     type="text"
    //     label="TesteTeste"
    //     startAdornment={
    //       <InputAdornment position="start">
    //         <IconButton aria-label="" edge="start">
    //           {Icon && <Icon />}
    //         </IconButton>
    //       </InputAdornment>
    //     }
    //   />
    // </FormControl>
  );
};
export default Input;
