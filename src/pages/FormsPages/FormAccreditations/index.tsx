import { Grid } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FormProvider, useForm } from 'react-hook-form';

import { FiArrowLeft } from 'react-icons/fi';
// import Image from 'material-ui-image';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import teste from '../../../assets/petPictures/perfildog.jpg';
import Select from '../../../components/Select';
import {
  Container,
  Content,
  GridHeaderSearch,
  Form,
  ContainerDog,
} from './styles';
import HealthPlansApi from '../../../services/HealthPlansApi';
import SellerApi from '../../../services/SellerApi';
import AccreditationsApi from '../../../services/AccreditattionsApi';
import Navbar from '../../../components/MenuMobile/Navbar';
import Loading from '../../../components/Loading';
import InputText from '../../../components/InputText';
import InputMoney from '../../../components/InputMoney';

interface RouteParams {
  id: string;
}
interface arrayList {
  value: string;
  label: string;
}

const FormAccreditations: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const methods = useForm({
    shouldUnregister: false,
    defaultValues: { gender: '', kind_people: '' },
  });

  const [isImgBanco, setIsImgBanco] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHealthPlans, setIsHealthPlans] = useState<arrayList[]>([]);
  const [isSeller, setIsSeller] = useState<arrayList[]>([]);
  const onSubmit = data => {
    console.log(data);

    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });
    if (!id) {
      AccreditationsApi.create(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      AccreditationsApi.put(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  const listHealthPlans = () => {
    const array: arrayList[] = [];
    HealthPlansApi.getAll()
      .then(result => {
        result.response.forEach(item => {
          array.push({ value: item.plan_id, label: item.description });
          console.log(item);
        });
        setIsHealthPlans(array);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const listSeller = () => {
    const array: arrayList[] = [];
    SellerApi.getAll()
      .then(result => {
        result.response.forEach(item => {
          array.push({ value: item.people_id, label: item.name });
          console.log(item);
        });
        setIsSeller(array);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    const listAccreditations = () => {
      // setIsLoading(true);
      AccreditationsApi.get(id)
        .then(result => {
          console.log(methods);
          methods.reset(result.data.response[0]);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        })
        .catch(e => {
          console.log(e);
        });
    };
    listAccreditations();
    listHealthPlans();
    listSeller();
  }, []);

  const durations = [
    { value: '6', label: '06 Mes' },
    { value: '12', label: '12 Meses' },
    { value: '18', label: '18 Meses' },
    { value: '24', label: '24 Meses' },
    { value: '30', label: '30 Meses' },
    { value: '36', label: '36 Meses' },
  ];
  const status = [
    { value: '0', label: 'Ativo' },
    { value: '1', label: 'Inativo' },
  ];
  const petsnumber = [
    { value: '1', label: '01' },
    { value: '2', label: '02' },
    { value: '3', label: '03' },
  ];

  const images = [
    { animal1: '../../../assets/petPictures/perfildog.jpg' },
    { animal2: '../../../assets/petPictures/perfildog2.jpg' },
  ];
  return (
    <>
      <Loading isLoading={isLoading} />
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

            <Navbar name={id ? 'Editar Cliente' : 'Criar Novo Cliente'} />

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
          </GridHeaderSearch>
          <FormProvider {...methods}>
            <Form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid container>
                <Grid item xs={12} sm={6} md={5}>
                  <Input
                    style={{ width: '80%' }}
                    name="name"
                    label="Nome Completo"
                    icon={AiOutlineUser}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={1}>
                  <Button
                    background="primary"
                    style={{ width: '100%', display: 'flex' }}
                  >
                    ...
                  </Button>
                </Grid>
                <Grid item xs={4} sm={6} md={2}>
                  <Input
                    name="date_register"
                    label="Data de Associacao"
                    mask="99/99/9999"
                  />
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Select
                    name="plans"
                    placeholder="Plano"
                    options={isHealthPlans}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Select
                    name="duration"
                    placeholder="Prazo em Meses"
                    options={durations}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Select
                    name="regitration_user"
                    placeholder="Vendedor"
                    options={isSeller}
                  />
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Input
                    name="disqualification_date"
                    label="Data de Encerramento"
                    mask="99/99/9999"
                  />
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Select
                    name="pets_number"
                    placeholder="Qtde de Animais"
                    options={petsnumber}
                  />
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Select
                    name="status"
                    placeholder="Situação"
                    options={status}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <InputMoney name="amount" label="Valor Total" />
                </Grid>
              </Grid>
              {/* nome raça peso idade caracteristica */}
              <Grid container xs={12} sm={12} md={12} style={{ padding: 8 }}>
                <Grid item xs={4} sm={4} md={4} style={{ padding: 5 }}>
                  <ContainerDog>
                    <div
                      className="profile-dog"
                      style={{
                        background: `no-repeat center/100% url(${process.env.PUBLIC_URL}/assets/perfildog.jpg)`,
                      }}
                    />
                    <Input name="named" label="Nome" />
                    <Input name="breed" label="Raça" />
                    <Input name="weigth" label="Peso" />
                    <Input name="age" label="Idade" />
                    <InputText name="caracter" label="Características" />
                  </ContainerDog>
                </Grid>
                <Grid item xs={4} sm={4} md={4} style={{ padding: 5 }}>
                  <ContainerDog>
                    <div
                      className="profile-dog"
                      style={{
                        background:
                          "no-repeat center/100% url('http://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg')",
                      }}
                    />
                    <Input name="named" label="Nome" />
                    <Input name="breed" label="Raça" />
                    <Input name="weigth" label="Peso" />
                    <Input name="age" label="Idade" />
                    <InputText name="caracter" label="Características" />
                  </ContainerDog>
                </Grid>
                <Grid item xs={4} sm={4} md={4} style={{ padding: 5 }}>
                  <ContainerDog>
                    <div
                      className="profile-dog"
                      style={{
                        backgroundImage:
                          "no-repeat center/100% url('https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg')",
                      }}
                    />
                    <Input name="named" label="Nome" />
                    <Input name="breed" label="Raça" />
                    <Input name="weigth" label="Peso" />
                    <Input name="age" label="Idade" />
                    <InputText name="caracter" label="Características" />
                  </ContainerDog>
                </Grid>
              </Grid>
              <Button
                type="submit"
                background="primary"
                style={{ marginTop: 15 }}
              >
                {id ? 'Atualizar' : 'Cadastar'}
              </Button>
            </Form>
          </FormProvider>
        </Content>
      </Container>
    </>
  );
};

export default FormAccreditations;
