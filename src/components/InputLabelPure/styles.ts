import { IconButton } from '@material-ui/core';
import { TextFieldProps } from '@rmwc/textfield';
import styled, { css } from 'styled-components';

type inputProps = TextFieldProps & {
  isFocused?: boolean;
  isFilled?: boolean;
  isIcon?: boolean;
};
export const Container = styled.div<inputProps>`
  position: relative;
  border-radius: 10px;
  border: 2px solid #bfbfbf;
  margin: 5px;
  color: #bfbfbf;
  display: flex;
  & input {
    color: #9d9d9c;
    background: transparent;
    width: 100%;
    border: 0;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    padding: ${props => (props.isIcon ? `15px 15px 15px 0` : `15px`)};
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
    &::placeholder {
      color: transparent;
    }
  }

  & label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 10px);
    transform: ${props =>
      props.isIcon
        ? `translate(35px, 0px) scale(1)`
        : `translate(5x, 0px) scale(1)`};
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
        transform: translate(10px, -25px) scale(0.8);
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
        transform: translate(10px, -25px) scale(0.8);
        font-size: 500;
      }
      & svg {
        color: #17a0ae !important;
      }
      & {
        border-color: #17a0ae;
      }
    `}
`;

export const ButtonIcon = styled(IconButton)`
  & {
    border-color: red !important;
    left: 2px;
    padding: 5px !important;
  }
`;
