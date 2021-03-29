import { Autocomplete } from '@material-ui/lab';
import styled, { css } from 'styled-components';

interface SelectProps {
  isfilled?: boolean | string;
}
export const Container = styled(Autocomplete)<SelectProps>`
  & .MuiForm-filled {
  }
  padding-right: 0;
  display: flex;
  margin: 5.5px;
  border-radius: 10px;
  & .MuiInputBase-input {
    height: 12px !important;
    font: 400 16px Ubuntu, sans-serif;
  }
  & fieldset {
    font-size: 18px !important;
    border-radius: 10px;
    border-width: 2px;
    border-color: #bfbfbf !important;
  }
  & label {
    transform: translate(10px, 15px) scale(1);
    color: #bfbfbf;
  }
  & fieldset .PrivateNotchedOutline-legendLabelled-9 {
    font-size: 13px !important;
  }
  & input {
    font-size: 16px !important;
    color: #9d9d9c;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #17a0ae !important;
  }
  &:hover fieldset {
    border-color: #17a0ae !important;
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
    padding: 7px !important;
    padding-right: 25px !important;
  }
  .MuiAutocomplete-clearIndicator {
    /* top: -10px;*/
    left: 10px;
  }
  @media (max-width: 600px) {
    & label {
      font-size: 14px !important;
    }
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
