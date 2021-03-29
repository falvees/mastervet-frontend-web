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
import { Container, GridHeaderSearch, Content, Pets, LogoNav } from './styles';
import Input from '../../../components/InputLabelPure';

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
            <Pets lg={3} md={3} sm={4} xs={12}>
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
