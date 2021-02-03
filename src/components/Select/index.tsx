import { TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';

interface PropsS {
  value: string;
  label: string;
}
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  options: Array<{ value: string; label: string }>;
  setValue?: any;
  watch?: any;
  register?: any;
  control?: any;
}

const Select: React.FC<SelectProps> = ({
  setValue,
  watch,
  register,
  control,
  name,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  options,
}) => {
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
    setIsFilled(!!watch(name));
  }, [watch, name]);

  const Pos = useCallback(val => {
    if (!val || typeof val === 'object') {
      return null;
    }

    const valueDef =
      options[options.findIndex(e => e.value === `${val}`)]?.value;
    const labelDef =
      options[options.findIndex(e => e.value === `${val}`)]?.label;

    const obj = { value: valueDef, label: labelDef };
    setIsFilled(!!watch(name));
    setValue(name, obj);
    return obj;
  }, []);

  useEffect(() => {
    Pos(watch(name));
  });

  return (
    <>
      <Controller
        render={({ onChange, ...props }) => (
          <Container
            isfilled={isFilled.toString()}
            className="select-custom"
            id={name}
            options={options}
            // onInputChange={(value: any) => console.log(value)}
            getOptionSelected={
              (option: any, value: any) => value.value === option.value
              // eslint-disable-next-line react/jsx-curly-newline
            }
            getOptionLabel={(option: any) => (option.label ? option.label : '')}
            renderInput={params => (
              <TextField
                autoComplete="new-password"
                onBlur={HandleInputBlur}
                onFocus={HandleInputFocus}
                {...params}
                name={name}
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
            onChange={(e, data: any) => onChange(data)}
            {...props}
          />
        )}
        control={control}
        defaultValue={null}
        name={name}
        rules={{ required: true }}
      />
    </>
  );
};
export default Select;
