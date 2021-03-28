import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import React, { InputHTMLAttributes, useCallback, useEffect } from 'react';
import { IconBaseProps } from 'react-icons';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({
  name,
  // icon: Icon,
  // iconColor,
  placeholder,
  options,
  required,
}) => {
  const { control, getValues, setValue } = useFormContext();

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

  const getOpObj = option => {
    if (!option) return option;
    if (!option.value) {
      const opt = options.find(op => op.value.toString() === option.toString());
      setValue(name, { value: 'M', label: 'Masculino' });
      return opt;
    }
    setValue(name, { value: 'M', label: 'Masculino' });
    return option;
  };

  // const Pos = useCallback(val => {
  //   if (!val || typeof val === 'object') {
  //     return null;
  //   }

  //   const valueDef =
  //     options[options.findIndex(e => e.value === `${val}`)]?.value;
  //   const labelDef =
  //     options[options.findIndex(e => e.value === `${val}`)]?.label;

  //   const obj = { value: valueDef, label: labelDef };
  //   setValue(name, obj);
  //   return obj;
  // }, []);

  useEffect(() => {
    // getOpObj(getValues(name));
    // getOpObj(getValues(name));
    // setValue(name, { value: 'M', label: 'Masculino' });
    // console.log(getOpObj(getValues(name)));
  }, []);
  return (
    <Controller
      render={({ onChange, ...props }) => (
        <Container
          isfilled={!!props.value}
          options={options}
          getOptionLabel={(option: any) => getOpObj(option)?.label}
          onChange={(e, data: any) => onChange(getOpObj(data)?.value)}
          renderInput={params => (
            <TextField
              name={name}
              {...params}
              autoComplete="new-password"
              label={placeholder}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
                form: {
                  autoComplete: 'new-password',
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  focused: classes.labelFocused,
                },
              }}
            />
          )}
          {...props}
        />
      )}
      name={name}
      control={control}
      rules={{ required }}
      // defaultValue={{ value: 'M', label: 'Masculino' }}
    />
  );
};
export default Select;
