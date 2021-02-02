import { Grid, Hidden } from '@material-ui/core';

import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiAlignLeft, FiArrowLeft, FiSearch } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/InputLabelPure';
import MenuPrincipalLeft from '../../components/MenuPrincipalLeft';

import Select from '../../components/Select';
import PeopleApi from '../../services/PeopleApi';
import { Container, GridHeaderSearch, Content } from './styles';
import Navbar from '../../components/MenuMobile/Navbar';

const FormUsers: React.FC = () => {
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
    Object.keys(data).forEach((key, item) => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    PeopleApi.create(data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const kindPeople = [
    { value: '1', label: 'Física' },
    { value: '2', label: 'Jurídica' },
  ];
  const genders = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
  ];
  return (
    <Container container item sm={12} style={{ width: '100%', flex: 1 }}>
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

          <Navbar name="Cadastrando Usuários" />

          <Hidden only={['xs']}>
            <Grid
              container
              item
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Cadastrando Usuários
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
          {/* <Link to="/cadastro_usuario" className="add-user">
            <Button background="primary" style={{ width: 180, height: 40 }}>
              Adicionar Cliente
            </Button>
          </Link> */}
        </GridHeaderSearch>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: '100%' }}
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Input
                name="name"
                placeholder="Nome Completo"
                icon={AiOutlineUser}
                // register={register}
                // getValues={getValues}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Select
                name="gender"
                placeholder="Sexo"
                options={genders}

                // getValues={getValues}
              />
              {errors.gender && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Input
                name="date_birth"
                placeholder="Nascimento"
                mask="99/99/9999"
                // register={register}
                // getValues={getValues}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Select
                name="kind_people"
                placeholder="Tipo Pessoa"
                options={kindPeople}

                // getValues={getValues}
              />
              {errors.kind_people && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
          </Grid>
          <div style={{ padding: '0 5px', marginTop: 15 }}>
            <Button type="submit" background="primary">
              Cadastrar
            </Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};
export default FormUsers;
