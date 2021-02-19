import { Grid } from '@material-ui/core';

import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import { Container, Content, GridHeaderSearch } from './styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface RouteParams {
  id: string;
}

const FormAnimalType: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const methods = useForm({
    shouldUnregister: false,
  });

  const onSubmit = data => {
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });
    console.log(data);
    AnimalTypeApi.create(data)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          Swal.fire('Registro Gravado!');
          window.location.href = '/animaltype';
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <FormProvider {...methods}>
      <Container container>
        <MenuPrincipalLeft pages={['all']} />

        <Content>
          <GridHeaderSearch
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <Navbar
              name={id ? 'Editar Tipo Animal' : 'Criar Novo Tipo Animal'}
            />

            <Grid
              className="title-header"
              container
              item
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                {id ? 'Editar Tipo Animal' : 'Criar Novo Tipo Animal'}
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
          </GridHeaderSearch>

          <Form
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <Input
                  name="description"
                  placeholder="Descrição"
                  icon={AiOutlineUser}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              background="primary"
              style={{ marginTop: 15, width: '98%' }}
            >
              {id ? 'Atualizar' : 'Cadastar'}
            </Button>
          </Form>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default FormAnimalType;
