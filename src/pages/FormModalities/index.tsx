import { Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/InputLabelPure';
import MenuPrincipalLeft from '../../components/MenuPrincipalLeft';
import Select from '../../components/Select';
import { Container, Content } from './styles';
import ModalitiesApi from '../../services/ModalitiesApi';

const FormAnimalType: React.FC = () => {
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
    ModalitiesApi.create(data)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/modalidades';
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
      <MenuPrincipalLeft pages={['all']} />
      <Content>
        <Grid
          container
          sm={12}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
            Criar Modalidade de Atendimento
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
          <Button type="submit" background="primary">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormAnimalType;
