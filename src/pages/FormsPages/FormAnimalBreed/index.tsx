import { Grid } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch, Form } from './styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import AnimalBreedApi from '../../../services/AnimalBreedApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface RouteParams {
  id: string;
}
interface arrayList {
  value: string;
  label: string;
}
const FormAnimalBreed: React.FC = () => {
  const { id } = useParams<RouteParams>();

  const {
    register,
    handleSubmit,
    errors,
    watch,
    control,
    setValue,
    getValues,
  } = useForm({
    shouldUnregister: false,
  });
  const [isAnimalType, setIsAnimalType] = useState<arrayList[]>([]);

  const onSubmit = data => {
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    AnimalBreedApi.create(data)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/animalbreed';
        }
      })
      .catch(error => {
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

  const sizes = [
    { value: 'P', label: 'Pequeno' },
    { value: 'M', label: 'Médio' },
    { value: 'G', label: 'Grande' },
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

          <Navbar name={id ? 'Editar Raça' : 'Criar Nova Raça'} />

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
              {id ? 'Editar Raça' : 'Criar Nova Raça'}
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
                register={register}
                watch={watch}
                setValue={setValue}
                control={control}
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
                register={register}
                watch={watch}
                setValue={setValue}
                control={control}
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
