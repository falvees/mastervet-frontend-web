import React from 'react';
import { Container, ButtonProps } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest} className="button-root">
    {children}
  </Container>
);

export default Button;
