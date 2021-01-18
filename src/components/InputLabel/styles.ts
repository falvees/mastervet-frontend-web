import { TextField, TextFieldProps } from '@rmwc/textfield';
import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type TesteProps = TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    isFilled?: boolean;
  };

export const Container = styled(TextField)<TesteProps>`
  & {
    width: 100%;
  }
  & input {
    color: #8c8c8c !important;
  }
  &:hover div {
    /* border: 2px solid #8c8c8c; */
    border-color: #8c8c8c !important;
    border-width: 2px;
  }

  ${props =>
    props.isFocused &&
    css`
      & div {
        border-color: #17a0ae !important;
      }
      & .mdc-floating-label,
      & svg {
        color: #17a0ae !important;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      & .mdc-floating-label,
      & svg {
        color: #17a0ae !important;
      }
    `}
`;
