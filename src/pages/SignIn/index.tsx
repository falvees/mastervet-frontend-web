/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../../components/InputLabelPure';
import Button from '../../components/Button';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.png';
import pata from '../../assets/pata.png';

const SignIn: React.FC = () => {
  const methods = useForm({
    shouldUnregister: false,
  });

  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <Container xs={12}>
        <Background className="background-sign-in" />
        <Content className="form-sign-in">
          <Form
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <img src={pata} alt="pata-sign-in" />
            <p>Faça seu login</p>
            <Input name="user" icon={AiOutlineUser} placeholder="Usuário" />
            <Input name="password" icon={FiLock} placeholder="Senha" />
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
    </FormProvider>
  );
};

export default SignIn;
