import { Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/InputLabelPure';
import MenuPrincipalLeft from '../../components/MenuPrincipalLeft';

import Select from '../../components/Select';
import { Container, Content } from './styles';
import AnimalBreedApi from '../../services/AnimalBreedApi';

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
        if (response.status === 200) {
          alert('Registro Gravado');
          window.location.href = '/animalbreed';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
      <MenuPrincipalLeft pages={['all']} />
      <Content>
        <Grid
          container
          sm={12}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <p style={{ fontWeight: 500, color: '#9d9d9c' }}>Criar Nova Raça</p>
          <hr
            style={{
              border: 0,
              borderBottom: '2px solid #17a0ae',
              width: 130,
              marginTop: 5,
            }}
          />
        </Grid>
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
                options={AnimalType}
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
          <Button type="submit" background="primary">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormAnimalBreed;
