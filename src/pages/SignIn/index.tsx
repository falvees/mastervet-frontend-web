/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { useForm } from 'react-hook-form';
import Input from '../../components/InputLabelPure';
import Button from '../../components/Button';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.png';
import pata from '../../assets/pata.png';

const SignIn: React.FC = () => {
  const { register, handleSubmit, unregister, getValues } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <Container xs={12}>
        {/* <Hidden only="xs"> */}
        <Background className="background-sign-in" />
        {/* </Hidden> */}
        <Content className="form-sign-in">
          <Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <img src={pata} alt="pata-sign-in" />
            <p>Faça seu login</p>
            <Input
              name="user"
              icon={AiOutlineUser}
              placeholder="Usuário"
              // register={register}
              // getValues={getValues}
            />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              // register={register}
              // getValues={getValues}
            />
            <Link to="/users">
              <Button
                type="submit"
                background="primary"
                style={{ width: '100%' }}
              >
                Entrar
              </Button>
            </Link>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
