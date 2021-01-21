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
      & {
        border-color: #17a0ae;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
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
