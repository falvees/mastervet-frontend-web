import { Grid } from '@material-ui/core';

import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import BillsCategoryApi from '../../../services/BillsCategoryApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface RouteParams {
  id: string;
}

const FormBillsCategory: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    errors,
    getValues,
  } = useForm({
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
    BillsCategoryApi.create(data)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/contas_categorias';
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const Status = [
    { value: 'P', label: 'Pagar' },
    { value: 'R', label: 'Receber' },
  ];

  return (
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
                name="kind"
                placeholder="Pagar/Receber"
                options={Status}
                register={register}
                watch={watch}
                setValue={setValue}
                control={control}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            background="primary"
            style={{ marginLeft: 5, marginTop: 15, width: '97.5%' }}
          >
            {id ? 'Atualizar' : 'Cadastar'}
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormBillsCategory;
