import { Grid } from '@material-ui/core';

import { Form } from '@unform/web';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import PetProceduresApi from '../../../services/PetProceduresApi';
import ModalitiesApi from '../../../services/ModalitiesApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface RouteParams {
  id: string;
}

interface arrayList {
  value: string;
  label: string;
}

const FormPetProcedure: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    errors,
  } = useForm({ shouldUnregister: false });

  const [isListModalities, setListModalities] = useState<arrayList[]>([]);

  const onSubmit = data => {
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    PetProceduresApi.create(data)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/procedures';
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const listModalities = () => {
    const array: arrayList[] = [];
    ModalitiesApi.getAll()
      .then(result => {
        console.log(result.response);
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
    setListModalities(array);
  };

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

          <Navbar
            name={id ? 'Editar Procedimento' : 'Criar Novo Procedimento'}
          />

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
              {id ? 'Editar Procedimento' : 'Criar Novo Procedimento'}
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
                placeholder="Descrição do Procedimento"
                icon={AiOutlineUser}
                register={register}
                watch={watch}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Select
                name="modality_id"
                placeholder="Modalidade"
                options={isListModalities}
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
            {id ? 'Atualizar' : 'Cadastar'}
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default FormPetProcedure;
