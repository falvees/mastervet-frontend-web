import { IconButton } from '@material-ui/core';
import { TextFieldProps } from '@rmwc/textfield';
import styled, { css } from 'styled-components';

type inputProps = TextFieldProps & {
  isFocused?: boolean;
  isFilled?: boolean;
  isIcon?: boolean;
  colorPlaceholder?: string;
  backgroundColor?: string;
};
export const Container = styled.div<inputProps>`
  position: relative;
  border-radius: 10px;
  border: 2px solid #bfbfbf;
  margin: 5px;
  color: #bfbfbf;
  display: flex;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  & input {
    color: #9d9d9c;
    background: transparent;
    width: 100%;
    border: 0;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    padding: ${props => (props.isIcon ? `12px 12px 12px 0` : `12px`)};
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
      -webkit-transition-delay: 9999s;
    }
    ${props =>
      props.colorPlaceholder &&
      css`
        &::placeholder {
          color: ${props.colorPlaceholder};
        }
      `}
  }

  & label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 10px);
    left: ${props => (props.isIcon ? `35px` : `10px`)};
    transform-origin: left;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    background-color: transparent;
    padding: 0 5px;
    box-sizing: border-box;
  }
  svg {
    font-size: 20px;
    margin: 5px;
  }

  /* & input:focus + label,
  & input:not(:placeholder-shown) + & label {
    font-size: 13px;
    top: -8px;
    color: #9d9d9c;
  } */

  ${props =>
    props.isFocused &&
    css`
      & label {
        background-color: white;
        color: #9d9d9c;
        top: -10px;
        left: 10px;
        transform: scale(0.8);
      }
      & svg {
        color: #17a0ae !important;
      }
      & {
        border-color: #17a0ae;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      & label {
        background-color: white;
        color: #9d9d9c;
        top: -10px;
        left: 10px;
        transform: scale(0.8);
        font-size: 500;
      }
      & svg {
        color: #17a0ae !important;
      }
      & {
        border-color: #17a0ae;
      }
    `}

    @media (max-width: 600px) {
    & input {
      font-size: 13px;
    }
  }
`;

export const ButtonIcon = styled(IconButton)`
  & {
    border-color: red !important;
    left: 2px;
    padding: 5px !important;
  }
`;
