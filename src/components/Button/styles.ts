import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
}
const backgroundColors = { primary: '#17a0ae', secondary: '#b4cd36' };

export const Container = styled.button<ButtonProps>`
  background-color: ${props => backgroundColors[props.background]};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${props =>
      shade(0.2, backgroundColors[props.background])};
  }
`;
