import { Grid, Hidden } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useForm, FormProvider } from 'react-hook-form';

import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import PeopleApi from '../../../services/PeopleApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface RouteParams {
  id: string;
}

const FormUsers: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(true);
  const onSubmit = data => {
    console.log(data);

    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    if (!id) {
      PeopleApi.create(data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      PeopleApi.put(data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    const listPeoples = () => {
      console.log('teste1');
      PeopleApi.get(id)
        .then(result => {
          methods.reset(result.data.response[0]);
        })
        .catch(e => {
          console.log(e);
        });
    };
    if (id) {
      listPeoples();
    }
  }, []);

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

          <Navbar name={id ? 'Editar Cliente' : 'Criar Novo Cliente'} />

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
                {id ? 'Editar Cliente' : 'Criar Novo Cliente'}
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

        <FormProvider {...methods}>
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{ width: '100%' }}
          >
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <Input
                  name="name"
                  label="Nome Completo"
                  icon={AiOutlineUser}
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={4} sm={6} md={2}>
                <Select
                  name="gender"
                  placeholder="Sexo"
                  options={genders}
                  register={methods.register}
                  watch={methods.watch}
                  setValue={methods.setValue}
                />
                {/* {errors.gender && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )} */}
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <Input
                  name="date_birth"
                  label="Nascimento"
                  mask="99/99/9999"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <Select
                  name="kind_people"
                  placeholder="Tipo Pessoa"
                  options={kindPeople}
                  register={methods.register}
                  watch={methods.watch}
                  setValue={methods.setValue}
                />
                {/* {errors.kind_people && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )} */}
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input
                  name="cpf_cgc"
                  label="CPF / CNPJ"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Input
                  name="identity_document"
                  label="RG"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Input
                  name="issuing_entity"
                  label="Orgão Emissor"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input
                  name="email"
                  label="Email"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Input
                  name="observations"
                  label="Observações"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={4} sm={6} md={3}>
                <Input
                  name="telephone01"
                  label="Telefone"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={4} sm={6} md={3}>
                <Input
                  name="telephone02"
                  label="Celular"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={4} sm={6} md={3}>
                <Input
                  name="telephone03"
                  label="Celular"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <Input
                  name="cep"
                  label="Cep"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input
                  name="address"
                  label="Endereço"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={8} sm={8} md={4}>
                <Input
                  name="neighborhood"
                  label="Bairro"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Input
                  name="number_address"
                  label="Número"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>

              <Grid item xs={12} sm={8} md={6}>
                <Input
                  name="city"
                  label="Cidade"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Input
                  name="state"
                  label="UF"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
              <Grid item xs={8} sm={12} md={4}>
                <Input
                  name="address_complement"
                  label="Complemento"
                  register={methods.register}
                  watch={methods.watch}
                />
              </Grid>
            </Grid>
            <Button type="submit" background="primary">
              {id ? 'Atualizar' : 'Cadastar'}
            </Button>
          </form>
        </FormProvider>
      </Content>
    </Container>

    // <Grid sm={12}>
    //   <p>CADASTRO PETS</p>
    // </Grid>
  );
};

export default FormUsers;
