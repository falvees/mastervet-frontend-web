import { IconButton } from '@material-ui/core';
import { TextFieldProps } from '@rmwc/textfield';
import styled, { css } from 'styled-components';

type inputProps = TextFieldProps & {
  isFocused?: boolean;
  isFilled?: boolean;
  isIcon?: boolean;
};
export const Container = styled.div<inputProps>`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #bfbfbf;
  /* width: 100%; */
  color: #bfbfbf;
  font-size: 14px;
  margin: 5px;

  display: flex;
  align-items: center;

  &:hover {
    border-color: #17a0ae;
    & svg {
      color: #17a0ae !important;
    }
  }

  & + div {
    margin-top: 8px;
  }
  input {
    width: 100%;
    color: #9d9d9c;
    background: transparent;
    flex: 1;
    border: 0;
    padding: ${props =>
      props.isIcon ? ` 16px 16px 16px 0px` : ` 16px 16px 16px 12px`};
    &::placeholder {
      color: #bfbfbf;
    }
  }
  svg {
    font-size: 20px;
    margin: 5px;
  }

  & label {
    transform-origin: left;
    transition: all 0.3s;
    position: absolute;
    transform: ${props =>
      props.isIcon
        ? `translate(44px, 0px) scale(1)`
        : `translate(10px, 0px) scale(1)`};
  }

  ${props =>
    props.isFocused &&
    css`
      & label {
        padding: 0 10px;
        background: white;
        color: #9d9d9c;
        transform: translate(5px, -26px) scale(0.8);
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
        padding: 0 10px;
        background: white;
        color: #9d9d9c;
        transform: translate(5px, -26px) scale(0.8);
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
