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
import Button from '../../../components/Button';
import {
  Container,
  GridHeaderSearch,
  Content,
  Pets,
  LogoNav,
  ContainerDog,
  ContainerDogDesc,
} from './styles';
import Input from '../../../components/InputLabelPure';
import InputText from '../../../components/InputText';

const MyPets: React.FC = () => {
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

            <IoPersonCircle
              color="#fff"
              fontSize="40px"
              style={{ position: 'absolute', right: '10px', top: '10px' }}
            />
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
            <Grid item xs={12} sm={6} md={3} style={{ padding: 5 }}>
              <ContainerDog>
                <div
                  className="profile-dog"
                  style={{
                    background: `url(${process.env.PUBLIC_URL}/assets/perfildog.jpg) no-repeat`,
                  }}
                />
                <ContainerDogDesc>
                  <Input
                    name="name1"
                    label="Nome"
                    borderColor="#fff"
                    iconColor="#fff"
                    icon={AiOutlineUser}
                  />
                  <Input
                    name="breed"
                    label="Raça"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="weigth"
                    label="Peso"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="age"
                    label="Idade"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <InputText
                    name="pets[0].caracter"
                    label="Características"
                    borderColor="#fff"
                  />
                </ContainerDogDesc>
              </ContainerDog>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ padding: 5 }}>
              <ContainerDog>
                <div
                  className="profile-dog"
                  style={{
                    background: `url(${process.env.PUBLIC_URL}/assets/perfildog.jpg) no-repeat`,
                  }}
                />
                <ContainerDogDesc>
                  <Input
                    name="name2"
                    label="Nome"
                    borderColor="#fff"
                    iconColor="#fff"
                    icon={AiOutlineUser}
                  />
                  <Input
                    name="breed"
                    label="Raça"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="weigth"
                    label="Peso"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="age"
                    label="Idade"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <InputText
                    name="pets[1].caracter"
                    label="Características"
                    borderColor="#fff"
                  />
                </ContainerDogDesc>
              </ContainerDog>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ padding: 5 }}>
              <ContainerDog>
                <div
                  className="profile-dog"
                  style={{
                    background: `url(${process.env.PUBLIC_URL}/assets/perfildog.jpg) no-repeat`,
                  }}
                />
                <ContainerDogDesc>
                  <Input
                    name="name3"
                    label="Nome"
                    borderColor="#fff"
                    iconColor="#fff"
                    icon={AiOutlineUser}
                  />
                  <Input
                    name="breed"
                    label="Raça"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="weigth"
                    label="Peso"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <Input
                    name="age"
                    label="Idade"
                    borderColor="#fff"
                    iconColor="#fff"
                  />
                  <InputText
                    name="pets[2].caracter"
                    label="Características"
                    borderColor="#fff"
                  />
                </ContainerDogDesc>
              </ContainerDog>
            </Grid>
            <Pets lg={3} md={3} sm={3} xs={12}>
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'space-evenly',
                  flexDirection: 'column',
                  border: '1px solid gainsboro',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    border: '1px solid gainsboro',
                    padding: '20px 50px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px',
                  }}
                >
                  <h2>Banho e Tosa</h2>
                  12
                </div>
                <div
                  style={{
                    width: '100%',
                    border: '1px solid gainsboro',
                    padding: '20px 50px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px',
                  }}
                >
                  <h2>Banho e Tosa</h2>
                  12
                </div>
                <div
                  style={{
                    width: '100%',
                    border: '1px solid gainsboro',
                    padding: '20px 50px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px',
                  }}
                >
                  <h2>Banho e Tosa</h2>
                  12
                </div>
                <div
                  style={{
                    width: '100%',
                    border: '1px solid gainsboro',
                    padding: '20px 50px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    position: 'relative',
                    top: '10px',
                  }}
                >
                  <h2>Banho e Tosa</h2>
                  12
                </div>
              </Grid>
            </Pets>
          </Grid>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default MyPets;
