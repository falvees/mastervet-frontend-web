import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { TextFieldProps } from '@rmwc/textfield';
import styled, { css } from 'styled-components';

type inputProps = TextFieldProps & {
  isFocused?: boolean;
  isFilled?: boolean;
  isIcon?: boolean;
  colorPlaceholder?: string;
  backgroundColor?: string;
  label?: string;
  // isLoading?: Boolean;
};
export const Container = styled(TextField)<inputProps>`
  position: relative;
  border-radius: 10px;
  margin: 5px !important;
  color: #bfbfbf !important;
  display: flex;
  min-height: 46px;
  &:hover {
    & fieldset {
      border-color: #17a0ae !important;
    }
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #17a0ae !important;
    & .MuiFormLabel-root {
      color: #9d9d9c !important;
    }
  }
  .MuiFormLabel-root {
    color: #bfbfbf !important;
    font: 400 16px Ubuntu, sans-serif;
  }

  /* .MuiFormLabel-root.Mui-focused {
    font-size: 14px;
  } */
  & fieldset {
    color: red !important;
    font-size: 16px;
    border-radius: 10px;
    /* border-width: 2px;
    border-color: #bfbfbf; */
    padding: 7px;
    min-height: 46px;
    border: 2px solid #bfbfbf;
    width: 100%;
    display: flex;
  }

  & textarea {
    color: #9d9d9c !important;
  }

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  & label {
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    font-size: 20px;
    margin: 5px;
  }
  .PrivateNotchedOutline-legendNotched-10 > span {
    /* font-size: 14px !important; */
    padding: 0 10px;
  }
  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.8) !important;
  }

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      & label,
      .MuiFormLabel-root {
        overflow: unset !important;
        text-overflow: unset !important;
        color: #9d9d9c !important;
        transform: translate(14px, -6px) scale(0.8) !important;
      }
      & svg {
        color: #17a0ae !important;
      }
      & fieldset {
        border-color: #17a0ae;
      }
    `}

  /* ${props =>
    props.isFilled &&
    css`
      & label,
      .MuiFormLabel-root {
        overflow: unset;
        text-overflow: unset;
        color: #9d9d9c !important;
        transform: translate(14px, -6px) scale(0.8) !important;
      }
      & svg {
        color: #17a0ae !important;
      }
      & fieldset {
        border-color: #17a0ae;
        & legend {
          ${props.label &&
          css`
            padding: 0 7px;
          `}
          width: auto;
        }
      }
    `} */

    @media (max-width: 600px) {
    & input {
      font-size: 13px;
    }
  }
`;

export const ButtonIcon = styled(IconButton)`
  & {
    left: 2px;
    padding: 5px 0 !important;
    width: 42px;
    height: 42px;
  }
`;
