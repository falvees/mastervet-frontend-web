/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../../components/InputLabelPure';
import Button from '../../components/Button';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.png';
import pata from '../../assets/pata.png';

// export const Button: React.FC<ButtonProps> = () => {
//   return (
//     <Link to="/cadastro_usuario">
//       <ButtonLogin variant="contained" size="large" className="button-sign-in">
//         Entrar
//       </ButtonLogin>
//     </Link>
//   );
// };

const SignIn: React.FC = () => {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <Container xs={12}>
        {/* <Hidden only="xs"> */}
        <Background className="background-sign-in" />
        {/* </Hidden> */}
        <Content className="form-sign-in">
          <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <img src={pata} alt="pata-sign-in" />
            <p>Faça seu login</p>
            {/* "#bfbfbf */}

            {/* <IconButton
                      aria-label="toggle password visibility"
                      edge="start"
                    >
                      <FiLock color="#bfbfbf" />
                    </IconButton> */}
            <Input name="user" icon={AiOutlineUser} placeholder="Usuário" />
            <Input name="password" icon={FiLock} placeholder="Senha" />
            <Button type="submit" background="Primary">
              Entrar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
