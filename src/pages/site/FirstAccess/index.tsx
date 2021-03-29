import React, { useEffect, useState } from 'react';
// import {
//   withStyles,
//   Theme,
//   createStyles,
//   makeStyles,
// } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { IoPersonCircle } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLock2Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import {
  Container,
  GridHeaderSearch,
  Content,
  ContainerUser,
  LogoNav,
  TituloCadastro,
  LinkLogup,
} from './styles';

import Input from '../../../components/InputLabelPure';

const FirstAccess: React.FC = () => {
  const methods = useForm({
    shouldUnregister: false,
  });

  const onSubmit = data => console.log(data);

  // const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <Container
        item
        sm={12}
        style={{ width: '100%', display: 'flex', height: '100vh' }}
      >
        <Content>
          <GridHeaderSearch container>
            <LogoNav />

            {/* <Link to="/register_animal_breed" className="add-user">
              <Button background="primary" style={{ width: 180 }}>
                Adicionar Raça
              </Button>
            </Link> */}

            <IoPersonCircle
              color="#fff"
              fontSize="40px"
              style={{ position: 'absolute', right: '10px', top: '10px' }}
            />

            <Link to="/login">
              <LinkLogup
                style={{ position: 'absolute', left: '7%', top: '10px' }}
              >
                <FiArrowLeft />
                Voltar
              </LinkLogup>
            </Link>
          </GridHeaderSearch>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'space-evenly',
              top: '100px',
            }}
          >
            <ContainerUser lg={4} md={4} sm={8} xs={12}>
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <TituloCadastro>Definir Senha</TituloCadastro>

                <div style={{ marginTop: '70px' }}>
                  <Input name="user" label="Usuário" icon={AiOutlineUser} />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Input name="password" label="Senha" icon={RiLock2Line} />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Input
                    name="passwordConfirm"
                    label="Repetir Senha"
                    icon={RiLock2Line}
                  />
                </div>

                <Button
                  background="primary"
                  style={{ marginTop: 30, width: '60%' }}
                >
                  Definir
                </Button>
              </Grid>
            </ContainerUser>
          </Grid>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default FirstAccess;
