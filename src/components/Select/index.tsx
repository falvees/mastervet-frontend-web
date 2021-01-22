import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  options: Array<{ value: string; label: string }>;
  control: any;
  getValues: any;
}

const Select: React.FC<SelectProps> = ({
  name,
  control,
  getValues,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  options,
}) => {
  // const { getValues } = useForm();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const useStyles = makeStyles({
    inputRoot: {
      fontSize: 16,
    },
    labelRoot: {
      fontSize: 16,
      color: '#9d9d9c',
      '&$labelFocused': {
        color: '#9d9d9c',
      },
      '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
        color: '#9d9d9c',
        fontWeight: 500,
        transform: 'translate(15px, -6px) scale(.8)',
      },
    },
    labelFocused: {},
  });
  const classes = useStyles();
  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, []);

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <Container
            isfilled={isFilled.toString()}
            className="select-custom"
            id={name}
            options={options}
            getOptionSelected={
              (option: any, value: any) => value.value === option.value
              // eslint-disable-next-line react/jsx-curly-newline
            }
            getOptionLabel={(option: any) => option.label}
            renderInput={params => (
              <TextField
                onBlur={HandleInputBlur}
                onFocus={HandleInputFocus}
                {...params}
                name={name}
                label={placeholder}
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
              />
            )}
            onChange={(e, data) => onChange(data)}
            {...props}
          />
        )}
        defaultValue={null}
        name={name}
        control={control}
        rules={{ required: true }}
      />
    </>
  );
};
export default Select;
