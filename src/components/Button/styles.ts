import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
}
const backgroundColors = { primary: '#17a0ae', secondary: '#b4cd36' };

export const Container = styled.button<ButtonProps>`
  background-color: ${props => backgroundColors[props.background]};
  height: 46px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 150px;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${props =>
      shade(0.2, backgroundColors[props.background])};
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    padding: 0;
    flex-shrink: 0;
    margin: 0;
  }
`;
