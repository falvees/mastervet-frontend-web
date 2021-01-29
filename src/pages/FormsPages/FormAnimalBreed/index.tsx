import { Grid, Hidden } from '@material-ui/core';

import { Form } from '@unform/web';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import AnimalBreedApi from '../../../services/AnimalBreedApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface arrayList {
  value: string;
  label: string;
}
const FormAnimalBreed: React.FC = () => {
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
  const [isAnimalType, setIsAnimalType] = useState<arrayList[]>([]);
  const onSubmit = data => {
    Object.keys(data).forEach(function (key, item) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    AnimalBreedApi.create(data)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/animalbreed';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const listAnimalType = () => {
    const array: arrayList[] = [];
    AnimalTypeApi.getAll()
      .then(result => {
        result.response.forEach(item => {
          array.push({ value: item.breed_id, label: item.description });
        });
        setIsAnimalType(array);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listAnimalType();
  }, []);

  const AnimalType = [
    { value: '1', label: 'Cachorros' },
    { value: '2', label: 'Gatos' },
  ];
  const sizes = [
    { value: 'P', label: 'Pequeno' },
    { value: 'M', label: 'Médio' },
    { value: 'G', label: 'Grande' },
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

          <Navbar name="Criar Nova Raça" />

          <Hidden only={['xs']}>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Criar Nova Raça
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
                name="breed_name"
                placeholder="Nome da Raça"
                icon={AiOutlineUser}
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Select
                name="type_id"
                placeholder="Tipo de Animal"
                options={isAnimalType}
                control={control}
                getValues={getValues}
              />
              {errors.type_id && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Select
                name="animal_size"
                placeholder="Porte do Animal"
                options={sizes}
                control={control}
                getValues={getValues}
              />
              {errors.animal_size && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
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

export default FormAnimalBreed;
