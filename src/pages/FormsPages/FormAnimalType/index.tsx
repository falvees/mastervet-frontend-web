import { Grid, Hidden } from '@material-ui/core';

import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import { Container, Content, GridHeaderSearch } from './styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import Navbar from '../../../components/MenuMobile/Navbar';

const FormAnimalType: React.FC = () => {
  const {
    register,
    handleSubmit,
    unregister,
    control,
    errors,
    getValues,
    setValue,
    formState,
  } = useForm({ shouldUnregister: false });

  const onSubmit = data => {
    Object.keys(data).forEach(function (key, item) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });
    console.log(data);
    AnimalTypeApi.create(data)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/animaltype';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container container>
      <Hidden xsDown>
        <MenuPrincipalLeft pages={['all']} />
      </Hidden>
      <Content>
        <GridHeaderSearch
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Hidden only={['xs']}>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </Hidden>

          <Navbar name="Criar Novo Tipo de Animal" />

          <Hidden only={['xs']}>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Criar Novo Tipo de Animal
              </p>
              <hr
                style={{
                  border: 0,
                  borderBottom: '2px solid #17a0ae',
                  width: 130,
                  marginTop: 5,
                }}
              />
            </Grid>
          </Hidden>
        </GridHeaderSearch>

        <Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Input
                name="description"
                placeholder="Descrição"
                icon={AiOutlineUser}
                register={register}
                getValues={getValues}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            background="primary"
            style={{ marginTop: 15, width: '98%' }}
          >
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormAnimalType;
