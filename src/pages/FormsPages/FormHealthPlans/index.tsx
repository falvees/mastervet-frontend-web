import { Grid, Hidden, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import Select from '../../../components/Select';
import { Container, Content } from './styles';
import HealthPlansApi from '../../../services/HealthPlansApi';
import Navbar from '../../../components/MenuMobile/Navbar';
import { GridHeaderSearch } from '../FormUsers/styles';

const FormHealthPlans: React.FC = () => {
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
    HealthPlansApi.create(data)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/plans';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const Status = [
    { value: '0', label: 'Ativo' },
    { value: '1', label: 'Inativo' },
  ];

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

          <Navbar name="Criar Novo Plano de Saúde" />

          <Hidden only={['xs']}>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Criar Novo Plano de Saúde
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
            <Grid item xs={12} sm={12} md={12}>
              <Select
                name="status"
                placeholder="Ativo/Inativo"
                options={Status}
                control={control}
                getValues={getValues}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            background="primary"
            style={{ marginLeft: 5, marginTop: 15, width: '97.5%' }}
          >
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormHealthPlans;
