import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  icon?: React.ComponentType<IconBaseProps>;
  colorIcon?: string;
}
const backgroundColors = { primary: '#17a0ae', secondary: '#b4cd36' };

export const Container = styled.button<ButtonProps>`
  background-color: ${props => backgroundColors[props.background]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 0;
  margin: 0 5px;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${props =>
      shade(0.2, backgroundColors[props.background])};
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
    flex-shrink: 0;
    margin: 0 5px;
  }

  > svg {
    color: ${props => props.colorIcon};
  }
`;
