import React, { useEffect, useState } from 'react';
// import {
//   withStyles,
//   Theme,
//   createStyles,
//   makeStyles,
// } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import { RiLock2Line } from 'react-icons/ri';
import PeopleApi from '../../../services/PeopleApi';

import Button from '../../../components/Button';
import {
  Container,
  GridHeaderSearch,
  Content,
  FormCustom,
  LogoNav,
  LinkLogup,
} from './styles';
import Input from '../../../components/InputLabelPure';
import Select from '../../../components/Select';
import Loading from '../../../components/Loading';

interface RouteParams {
  id: string;
}

const UserLogup: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const methods = useForm({
    shouldUnregister: false,
    defaultValues: { gender: '', kind_people: '' },
  });

  const [isLoading, setIsLoading] = useState(false);
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
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      PeopleApi.put(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    const listPeoples = () => {
      setIsLoading(true);
      PeopleApi.get(id)
        .then(result => {
          methods.reset(result.data.response[0]);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
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
    <FormProvider {...methods}>
      <Loading isLoading={isLoading} />
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

            <Link to={{ pathname: `../login/${id}` }}>
              <LinkLogup
                style={{ position: 'absolute', left: '7%', top: '10px' }}
              >
                <FiArrowLeft />
                Voltar
              </LinkLogup>
            </Link>
          </GridHeaderSearch>

          <FormCustom noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={1}
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'space-around',
                top: '70px',
                boxShadow: '0 5px 25px rgb(0 0 0 / 20%)',
                borderRadius: '10px',
                padding: '10px',
              }}
            >
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Input name="name" label="Nome Completo" />
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={6}>
                <Select
                  name="gender"
                  placeholder="Sexo"
                  options={genders}
                  required={false}
                />
                {methods.errors.gender && (
                  <p className="required-form">
                    <span>* </span>
                    Este campo é obrigatório.
                  </p>
                )}
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={6}>
                <Input mask="99/99/9999" name="date_birth" label="Nascimento" />
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={12}>
                <Select
                  name="kind_people"
                  placeholder="Tipo Pessoa"
                  options={kindPeople}
                  required={false}
                />
                {methods.errors.kind_people && (
                  <p className="required-form">
                    <span>* </span>
                    Este campo é obrigatório.
                  </p>
                )}
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Input name="cpf_cgc" label="CPF / CNPJ" />
              </Grid>
              <Grid item lg={4} md={4} sm={8} xs={8}>
                <Input name="identity_document" label="RG" />
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={4}>
                <Input name="issuing_entity" label="Orgão Emissor" />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Input name="email" label="Email" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Input name="observations" label="Observações" />
              </Grid>

              <Grid item lg={3} md={3} sm={4} xs={6}>
                <Input name="telephone01" label="Telefone" />
              </Grid>
              <Grid item lg={3} md={3} sm={4} xs={6}>
                <Input name="telephone02" label="Celular" />
              </Grid>
              <Grid item lg={3} md={3} sm={4} xs={6}>
                <Input name="telephone03" label="Celular" />
              </Grid>

              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Input name="cep" label="Cep" />
              </Grid>

              <Grid item lg={6} md={6} sm={9} xs={12}>
                <Input name="address" label="Endereço" />
              </Grid>
              <Grid item lg={4} md={4} sm={8} xs={8}>
                <Input name="neighborhood" label="Bairro" />
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={4}>
                <Input name="number_address" label="Número" />
              </Grid>

              <Grid item lg={6} md={6} sm={8} xs={12}>
                <Input name="city" label="Cidade" />
              </Grid>
              <Grid item lg={2} md={2} sm={4} xs={4}>
                <Input name="state" label="UF" />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={8}>
                <Input name="address_complement" label="Complemento" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Input name="usu" label="Usuário" icon={AiOutlineUser} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Input
                  name="password"
                  label="Senha"
                  icon={RiLock2Line}
                  type="password"
                />
              </Grid>

              <Link to="/my_pets">
                <Button
                  type="submit"
                  background="primary"
                  style={{ marginTop: 15 }}
                >
                  {id ? 'Atualizar' : 'Cadastar'}
                </Button>
              </Link>
            </Grid>
          </FormCustom>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default UserLogup;
