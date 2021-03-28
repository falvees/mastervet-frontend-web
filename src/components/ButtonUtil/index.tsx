import React from 'react';
import { Container, ButtonProps } from './styles';

const ButtonUtil: React.FC<ButtonProps> = ({ icon: Icon, ...rest }) => (
  <Container type="button" {...rest} className="button-root">
    {Icon && <Icon />}
  </Container>
);

export default ButtonUtil;
