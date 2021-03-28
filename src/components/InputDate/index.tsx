import { Controller, useFormContext } from 'react-hook-form';
import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  dateInitial?: Date | string;
  classNameDateButton?: string;
  onChangeCustom?: any;
}

const InputDate: React.FC<SelectProps> = ({
  dateInitial,
  name,
  label,
  // icon: Icon,
  // iconColor,
  // placeholder,
  classNameDateButton,
  onChangeCustom,
}) => {
  const { setValue, getValues, control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!dateInitial);
  const [isError, setIsError] = useState(false);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, [getValues, name]);

  // const [selectedDate, setSelectedDate] = useState<Date | string>(
  //   formatDate(new Date(`${dateInitial} 00:00:00`)),
  // );

  const formatDate = useCallback(
    dt => {
      if (dt) {
        const date = new Date(dt);
        const dia = date.getDate().toString().padStart(2, '0');
        const mes = (date.getMonth() + 1).toString().padStart(2, '0');
        const ano = date.getFullYear();
        const finalDate = `${ano}-${mes}-${dia}`;
        // setSelectedDate(new Date(`${ano}/${mes}/${dia} 00:00:00`)); // Vai para o DatePicker
        setValue(name, finalDate); // Vai para o Form
      } else {
        setValue(name, ''); // Vai para o Form
      }
    },
    [name, setValue],
  );
  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <Controller
        render={() => (
          <Container
            invalidDateMessage="Data em formato inválido."
            onError={e => {
              console.log(e);
              setIsError(!!e);
            }}
            isError={isError}
            isfilled={isFilled.toString()}
            isFocused={isFocused}
            onBlur={HandleInputBlur}
            onFocus={HandleInputFocus}
            name={name}
            placeholder="dd/mm/aaaa"
            disableToolbar
            variant="inline"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            margin="normal"
            label={label}
            value={
              getValues(name) ? new Date(`${getValues(name)} 00:00:00`) : null
            }
            // defaultValue={new Date(`${getValues(name)} 00:00:00`)}
            onChange={e => {
              formatDate(e);
              if (onChangeCustom) onChangeCustom();
            }}
            // KeyboardButtonProps={{
            //   'aria-label': 'change date',
            // }}
            cancelLabel="Cancelar"
            InputAdornmentProps={{
              position: 'start',

              id: classNameDateButton,
            }}
          />
        )}
        control={control}
        name={name}
        defaultValue={() => {
          if (dateInitial) formatDate(new Date(`${dateInitial} 00:00:00`));
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
export default InputDate;
