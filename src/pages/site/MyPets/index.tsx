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
import { IoMdArrowRoundForward } from 'react-icons/io';
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
  ContainerInfoDesc,
  InfoItem,
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
              // top: '10px',
            }}
          >
            <Grid item lg={3} md={3} sm={6} xs={12}>
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
            <Grid item lg={3} md={3} sm={6} xs={12}>
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
            <Grid item lg={3} md={3} sm={6} xs={12}>
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

            <Grid item lg={3} md={3} sm={6} xs={12}>
              <ContainerDog>
                <ContainerInfoDesc>
                  <InfoItem>
                    Banho e Cuidado
                    <h1>12</h1>
                  </InfoItem>
                  <InfoItem>
                    Banho e Cuidado
                    <h1>12</h1>
                  </InfoItem>
                  <InfoItem>
                    Banho e Cuidado
                    <h1>12</h1>
                  </InfoItem>
                  <InfoItem>
                    Banho e Cuidado
                    <h1>12</h1>
                  </InfoItem>

                  <Link
                    style={{ width: '100%', position: 'relative', left: '6%' }}
                    to="/payment_plan"
                  >
                    <Button
                      background="primary"
                      style={{
                        marginTop: 30,
                        width: '100%',
                        backgroundColor: '#ffcc29',
                        color: '#000',
                      }}
                    >
                      Seguinte
                      <IoMdArrowRoundForward
                        style={{
                          position: 'relative',
                          top: '3px',
                          left: '10px',
                        }}
                      />
                    </Button>
                  </Link>
                </ContainerInfoDesc>
              </ContainerDog>
            </Grid>
          </Grid>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default MyPets;
