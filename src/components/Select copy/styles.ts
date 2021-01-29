import { Autocomplete } from '@material-ui/lab';
import styled, { css } from 'styled-components';

interface SelectProps {
  isFilled?: boolean;
}
export const Container = styled(Autocomplete)<SelectProps>`
  & .MuiForm-filled {
  }
  margin: 5px;

  & fieldset {
    border-radius: 10px;
    border-width: 2px;
    border-color: #bfbfbf !important;
  }
  & label {
    color: #bfbfbf !important;
  }

  & input {
    color: #9d9d9c;
  }
  &:hover fieldset {
    border-color: #17a0ae;
    & svg {
      color: #17a0ae !important;
    }
  }
  /* ${props =>
    props.isFilled &&
    css`
      & fieldset {
        border-color: #17a0ae !important;
      }
    `} */

  .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding: 8px;
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
