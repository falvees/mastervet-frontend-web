import { Grid, Hidden } from '@material-ui/core';

import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import PeopleApi from '../../../services/PeopleApi';
import Navbar from '../../../components/MenuMobile/Navbar';

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
    Object.keys(data).forEach(function (key, item) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    PeopleApi.create(data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
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
  const plans = [
    { value: '1', label: 'Master Light' },
    { value: '2', label: 'Master Gold' },
    { value: '3', label: 'Master Premium ' },
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

          <Navbar name=" Criar Novo Cliente" />

          <Hidden only={['xs']}>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Criar Novo Cliente
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
            <Grid item xs={12} sm={6} md={6}>
              <Input
                name="name"
                placeholder="Nome Completo"
                icon={AiOutlineUser}
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Select
                name="gender"
                placeholder="Sexo"
                options={genders}
                control={control}
                getValues={getValues}
              />
              {errors.gender && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input
                name="date_birth"
                placeholder="Nascimento"
                mask="99/99/9999"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Select
                name="kind_people"
                placeholder="Tipo Pessoa"
                options={kindPeople}
                control={control}
                getValues={getValues}
              />
              {errors.kind_people && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input
                name="cpf_cgc"
                placeholder="CPF / CNPJ"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Input
                name="identity_document"
                placeholder="RG"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Input
                name="issuing_entity"
                placeholder="Orgão Emissor"
                register={register}
                getValues={getValues}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Select
                name="plan"
                placeholder="Plano Contratado"
                options={plans}
                control={control}
                getValues={getValues}
              />
              {errors.plan && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input
                name="telephone01"
                placeholder="Telefone"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input
                name="telephone02"
                placeholder="Celular"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input
                name="telephone03"
                placeholder="Celular"
                register={register}
                getValues={getValues}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input
                name="email"
                placeholder="Email"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Input
                name="observations"
                placeholder="Observações"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input
                name="cep"
                placeholder="Cep"
                register={register}
                getValues={getValues}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input
                name="address"
                placeholder="Endereço"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Input
                name="neighborhood"
                placeholder="Bairro"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input
                name="number_address"
                placeholder="Número"
                register={register}
                getValues={getValues}
              />
            </Grid>

            <Grid item xs={12} sm={8} md={6}>
              <Input
                name="city"
                placeholder="Cidade"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input
                name="state"
                placeholder="UF"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={8} sm={12} md={4}>
              <Input
                name="address_complement"
                placeholder="Complemento"
                register={register}
                getValues={getValues}
              />
            </Grid>
          </Grid>
          <Button type="submit" background="primary">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>

    // <Grid sm={12}>
    //   <p>CADASTRO PETS</p>
    // </Grid>
  );
};

export default FormUsers;