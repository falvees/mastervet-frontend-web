import { IconButton } from '@material-ui/core';
import { TextFieldProps } from '@rmwc/textfield';
import styled, { css } from 'styled-components';

type inputProps = TextFieldProps & {
  isFocused?: boolean;
  isFilled?: boolean;
  isIcon?: boolean;
  colorPlaceholder?: string;
  backgroundColor?: string;
  label?: boolean;
  // isLoading?: Boolean;
};
export const Container = styled.div<inputProps>`
  position: relative;
  border-radius: 10px;
  /* border: 2px solid #bfbfbf; */
  margin: 5px;
  color: #bfbfbf;
  display: flex;
  height: 46px;
  & fieldset {
    font-size: 16px;
    border-radius: 10px;
    padding: 0;
    height: 46px;
    border: 2px solid #bfbfbf;
    width: 100%;
    display: flex;
    & legend {
      border: 0;
      width: auto;
      height: 0px;
      display: block;
      padding: 0 7px;
      text-align: left;
      transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      visibility: hidden;
      transition: width 5s;
      margin: 0 10px;
      & span {
        font-size: 13px;
      }
    }
  }
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
    /* min-width: 250px; */
    padding: ${props => (props.isIcon ? `0` : `0 10px`)};
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
    transform-origin: left;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    background-color: transparent;
    padding: 0 5px;
    box-sizing: border-box;
    color: #9d9d9c;
    top: -8px;
    left: 15px;
    transform: scale(0.8);
  }
  svg {
    font-size: 20px;
    margin: 5px;
  }

  ${props =>
    props.isFocused &&
    css`
      & svg {
        color: #17a0ae !important;
      }
      & fieldset {
        border-color: #17a0ae;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      & svg {
        color: #17a0ae !important;
      }
      & fieldset {
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
    left: 2px;
    padding: 5px 0 !important;
    width: 42px;
    height: 42px;
  }
`;
