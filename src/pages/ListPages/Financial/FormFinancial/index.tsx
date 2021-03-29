import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import Button from '../../../../components/Button';
import Input from '../../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../../components/MenuPrincipalLeft';

import Select from '../../../../components/Select';
import { Container, Content, GridHeaderSearch, Form } from './styles';
import AnimalTypeApi from '../../../../services/AnimalTypeApi';
import AnimalBreedApi from '../../../../services/AnimalBreedApi';
import Navbar from '../../../../components/MenuMobile/Navbar';
import InputDate from '../../../../components/InputDate';

interface RouteParams {
  id: string;
}
interface arrayList {
  breed_id: string;
  breed_name: string;
}
interface financialList {
  id: string;
  conta: string;
}

const FormAnimalBreed: React.FC = () => {
  const StyledTableCell = withStyles(() =>
    createStyles({
      head: {
        // backgroundColor: '#bfbfbf',
        color: '#000',
        fontWeight: 600,
      },
      body: {
        fontSize: 14,
      },
    }),
  )(TableCell);

  const StyledTableRow = withStyles(
    (theme: import('@material-ui/core').Theme) =>
      createStyles({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }),
  )(TableRow);

  const useStyles = makeStyles({
    table: {
      height: '100%',
    },
    paper: {
      marginTop: 20,
      '&.MuiPaper-elevation5': {
        boxShadow:
          '-5px -5px 5px 4px rgba(0,0,0,0.05), 3px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
      },
    },
  });

  const { id } = useParams<RouteParams>();

  const methods = useForm({
    shouldUnregister: false,
  });
  const [isListAnimalBreed, setListAnimalBreed] = useState<arrayList[]>([]);
  const [isListFinancial, setIsListFinancial] = useState<financialList[]>([]);

  const onSubmit = data => {
    console.log(data);
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
  const listAnimalBreed = () => {
    AnimalBreedApi.getAll()
      .then(result => {
        setListAnimalBreed(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listAnimalBreed();
  }, []);

  const sizes = [
    { value: 'P', label: 'Pequeno' },
    { value: 'M', label: 'Médio' },
    { value: 'G', label: 'Grande' },
  ];
  const classes = useStyles();
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

          <Navbar name="Contas a Pagar" />

          <Grid
            className="title-header"
            container
            item
            sm={12}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <p style={{ fontWeight: 500, color: '#9d9d9c' }}>Contas a Pagar</p>
            <hr
              style={{
                border: 0,
                borderBottom: '2px solid #17a0ae',
                width: 100,
                marginTop: 5,
              }}
            />
          </Grid>
        </GridHeaderSearch>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <InputDate
                name="dt_inicio"
                label="Data Início"
                dateInitial="2021-02-18"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <InputDate
                name="dt_end"
                label="Data Final"
                dateInitial="2021-02-18"
              />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12}>
              <Input
                name="breed_name"
                placeholder="Nome da Raça"
                icon={AiOutlineUser}
                register={register}
                getValues={getValues}
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            background="primary"
            style={{ marginLeft: 5, marginTop: 15, width: '97.5%' }}
          >
            Cadastrar
          </Button>
        </Form>
        <Paper
          elevation={2}
          style={{ width: '100%' }}
          className={classes.paper}
        >
          <TableContainer style={{ flex: 1 }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow hover>
                  <StyledTableCell width="10%">Id</StyledTableCell>
                  <StyledTableCell width="50%">Descricao</StyledTableCell>
                  <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isListAnimalBreed &&
                  isListAnimalBreed.map(row => {
                    // console.log(row.type_id);
                    return (
                      <StyledTableRow key={row.breed_id}>
                        <StyledTableCell component="th" scope="row">
                          {row.breed_id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {row.breed_name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          ver, editar, apagar
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Content>
    </Container>
  );
};

export default FormAnimalBreed;
