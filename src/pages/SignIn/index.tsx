/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import Input from '../../components/InputLabelPure';
import Button from '../../components/Button';
import { Background, Container, Content } from './styles';

import pata from '../../assets/pata.png';

const SignIn: React.FC = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    user: yup.string().required('Required').email(),
    password: yup.string().required('Required').min(6),
  });
  // const resolver = useYupValidationResolver(validationSchema);

  const methods = useForm({
    shouldUnregister: false,
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    history.push('/users');
  };
  console.log(methods.errors);
  return (
    <FormProvider {...methods}>
      <Container xs={12}>
        <Background className="background-sign-in" />
        <Content className="form-sign-in">
          <form
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <img src={pata} alt="pata-sign-in" />
            <p>Faça seu login</p>
            <Input name="user" icon={AiOutlineUser} placeholder="Usuário" />
            {methods.errors.user?.type === 'required' && (
              <p className="required-form">
                <span>* </span>
                Este campo é obrigatório.
              </p>
            )}
            {methods.errors.user?.type === 'email' && (
              <p className="required-form">
                <span>* </span>
                Email com formato incorreto.
              </p>
            )}
            <Input name="password" icon={FiLock} placeholder="Senha" />
            {methods.errors.password?.type === 'required' && (
              <p className="required-form">
                <span>* </span>
                Este campo é obrigatório.
              </p>
            )}
            {methods.errors.password?.type === 'min' && (
              <p className="required-form">
                <span>* </span>
                Minimo de 6 Digitos
              </p>
            )}
            {/* <Link to="/users"> */}
            <Button
              type="submit"
              background="primary"
              style={{ width: '100%' }}
            >
              Entrar
            </Button>
            {/* </Link> */}
          </form>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default SignIn;
