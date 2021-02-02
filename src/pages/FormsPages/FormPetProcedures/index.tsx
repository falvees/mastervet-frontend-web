import { Grid, Hidden, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form } from '@unform/web';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch } from './styles';
import PetProceduresApi from '../../../services/PetProceduresApi';
import ModalitiesApi from '../../../services/ModalitiesApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface arrayList {
  value: string;
  label: string;
}

const FormPetProcedure: React.FC = () => {
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

  const [isListModalities, setListModalities] = useState<arrayList[]>([]);

  const onSubmit = data => {
    Object.keys(data).forEach(function (key, item) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].value;
      }
    });

    PetProceduresApi.create(data)
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert('Registro Gravado');
          window.location.href = '/procedures';
        }
      })
      .catch(function (error) {
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

          <Navbar name="Criar Novo Procedimento" />

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
                Criar Novo Procedimento
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
                name="description"
                placeholder="Descrição do Procedimento"
                icon={AiOutlineUser}
                // register={register}
                // getValues={getValues}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Select
                name="modality_id"
                placeholder="Modalidade"
                options={isListModalities}

                // getValues={getValues}
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

export default FormPetProcedure;
