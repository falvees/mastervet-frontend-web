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
// eslint-disable-next-line import/no-duplicates
import { format } from 'date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;

  setValue?: any;
  watch?: any;
  register?: any;
  control?: any;
  dateInitial: string | Date;
}

const InputDate: React.FC<SelectProps> = ({
  dateInitial,
  setValue,
  watch,
  register,
  control,
  name,
  label,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
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

  const [selectedDate, setSelectedDate] = useState<Date | string>(
    new Date(`${dateInitial} 00:00:00`),
  );

  const formatDate = dt => {
    const date = new Date(dt);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();
    const finalDate = `${ano}-${mes}-${dia}`;
    console.log(finalDate);
    setSelectedDate(new Date(`${ano}/${mes}/${dia} 00:00:00`)); // Vai para o DatePicker
    setValue(name, finalDate); // Vai para o Form
  };

  useEffect(() => {
    formatDate(new Date(`${dateInitial} 00:00:00`));
  }, []);

  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Controller
        {...{ name, control }}
        name={name}
        defaultValue={new Date(`${watch(name)} 00:00:00`)}
        render={({ onBlur, value }) => (
          <KeyboardDatePicker
            name={name}
            disableToolbar
            variant="dialog"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={label}
            value={watch(name) ? new Date(`${watch(name)} 00:00:00`) : null}
            defaultValue={new Date(`${watch(name)} 00:00:00`)}
            onChange={formatDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            invalidDateMessage="Data em formato inválido."
            cancelLabel="Cancelar"
            InputAdornmentProps={{ position: 'start' }}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};
export default InputDate;
