/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useField } from '@unform/core';
import { useForm, Controller } from "react-hook-form";
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { stringify } from 'querystring';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  id?: string;
  placeholder?: string;
  iconColor?: string;
  mask?: string;
  options: Array<{ value: string; label: string }>;
  register: any;
  control: any;
  getValues: any;
}

const Select: React.FC<SelectProps> = ({
  name,
  register,
  control,
  getValues,
  onChange,
  mask,
  icon: Icon,
  iconColor,
  placeholder,
  options,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {  setValue } = useForm();
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isInputRef, setIsInputRef] = useState('');
  // const [value, setValue] = useState('');
  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const HandleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   });
  // }, [fieldName, registerField]);
  const onTagsChange = useCallback(e => {
    if (e.value) {
      setValue('gender', 'sasasasass');
      // inputRef.current.value = 'tets';
      // document.getElementById(fieldName).value = 'teste';
      // inputRef.current?.value = 'isso';
    }
  }, []);
  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    { code: "AE", label: "United Arab Emirates", phone: "971" },
    { code: "AF", label: "Afghanistan", phone: "93" },
    { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
  ]

  function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== "undefined"
      ? isoCode
          .toUpperCase()
          .replace(/./g, char =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  }
  // onChange={(event, newValue) => {
    //   console.log(JSON.stringify(newValue, null, ' '));
    // }}
    //   renderOption={(option) =>  <option value="teste">option.label</option>}
  return (
    // <Controller
    //   as={(
    //     <Autocomplete
    //       options={countries}
    //       getOptionLabel={option => option.label}
    //       renderOption={option => (
    //         <span>
    //           {countryToFlag(option.code)}
    //           {option.label}
    //         </span>
    //       )}
    //       renderInput={params => (
    //         <TextField
    //           {...params}
    //           label="Choose a country"
    //           variant="outlined"
    //         />
    //       )}
    //     />
    //   )}
    //   onChange={([, data]) => data}
    //   name="country"
    //
    //   defaultValue={{ code: "AF", label: "Afghanistan", phone: "93" }}
    // />
    <Container
      // onFocus={HandleInputFocus}
      // onBlur={HandleInputBlur}
      className="select-custom"
      id={name}
      options={options}
      getOptionLabel={(option:any)  => {
        return option
      }}
      renderInput={params => (
        <TextField
          {...params}
          name={name}
          inputRef={register}
          label={placeholder}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};
export default Select;
