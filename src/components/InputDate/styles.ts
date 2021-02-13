import { KeyboardDatePicker } from '@material-ui/pickers';
import styled, { css } from 'styled-components';

interface SelectProps {
  isfilled?: boolean | string;
}
export const Container = styled(KeyboardDatePicker)<SelectProps>`
  & .MuiButtonBase-root {
    padding: 12px 0;
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
    font-size: 20px !important;
    border-radius: 10px;
    border-width: 2px;
    border-color: #bfbfbf !important;
    padding: 0 10px;
    & legend {
      font-size: 13px;
    }
  }
  & label {
    transform: translate(10px, 15px) scale(1);
    color: #9d9d9c;
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
      & label {
        transform: translate(15px, -5px) scale(0.8) !important;
        color: #9d9d9c;
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
