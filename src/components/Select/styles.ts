import { Autocomplete } from '@material-ui/lab';
import styled, { css } from 'styled-components';

interface SelectProps {
  isfilled?: boolean | string;
}
export const Container = styled(Autocomplete)<SelectProps>`
  & .MuiForm-filled {
  }
  display: flex;
  color: red;
  margin: 5.5px;
  & .MuiInputBase-input {
    font: 400 16px Ubuntu, sans-serif;
  }
  & fieldset {
    font-size: 20px !important;
    border-radius: 10px;
    border-width: 2px;
    border-color: #bfbfbf !important;
  }
  & label {
    transform: translate(10px, 18px) scale(1);
    color: #bfbfbf;
  }
  & fieldset .PrivateNotchedOutline-legendLabelled-9 {
    font-size: 12.5px !important;
  }
  & input {
    font-size: 16px !important;
    color: #9d9d9c;
  }
  &:hover fieldset {
    border-color: #17a0ae;
    & svg {
      color: #17a0ae !important;
    }
  }
  ${props =>
    props.isfilled === 'true' &&
    css`
      & fieldset {
        border-color: #17a0ae !important;
      }
    `}

  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding: 7px;
  }

  /* & .MuiAutocomplete-inputFocused .MuiFocused {
border-color: red !important;
} */
  /* & .MuiOutlinedInput-notchedOutline {
 border-width: '2px';
 border-color: "blue";
}
&:hover .MuiOutlinedInput-notchedOutline {
 border-width: "2px";
 border-color: "blue";
}
&.Mui-focused .MuiOutlinedInput-notchedOutline {
 border-width: "2px";
 border-color: "blue";
} */
`;
