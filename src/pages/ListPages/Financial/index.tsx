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
import { Link, useParams } from 'react-router-dom';

import React, { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FiArrowLeft, FiEdit, FiSearch, FiTrash2 } from 'react-icons/fi';

import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import { Container, Content, GridHeaderSearch, Form } from './styles';
import FinancialPay, {
  PropsFinancialPayItem,
} from '../../../services/FinancialPayItem';
import Navbar from '../../../components/MenuMobile/Navbar';
import Loading from '../../../components/Loading';
import InputDate from '../../../components/InputDate';
import ButtonUtil from '../../../components/ButtonUtil';
import PeopleApi from '../../../services/PeopleApi';

interface RouteParams {
  id: string;
}

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

const StyledTableRow = withStyles((theme: import('@material-ui/core').Theme) =>
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
const FormUsers: React.FC = () => {
  const [isListFinancial, setIsListFinancial] = useState<
    PropsFinancialPayItem[]
  >([]);
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
  const { getValues } = methods;
  const listAnimalBreed = useCallback(() => {
    const array: PropsFinancialPayItem[] = [];
    setIsLoading(true);
    let current = true;
    FinancialPay.getBetween(getValues('dt_inicio'), getValues('dt_end'))
      .then(result => {
        if (current)
          result.data.response.forEach(item => {
            array.push(item);
          });
        setIsListFinancial(array);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
    return () => {
      current = false;
    };
  }, [getValues]);

  useEffect(() => {
    if (!id) return;
    listAnimalBreed();
  }, [id, listAnimalBreed, methods]);

  const classes = useStyles();
  return (
    <FormProvider {...methods}>
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
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Contas a Pagar
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
                  classNameDateButton="dateInit"
                  onChangeCustom={listAnimalBreed}
                  // onChangeCustom={myFunction}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputDate
                  name="dt_end"
                  label="Data Final"
                  dateInitial="2021-02-18"
                  classNameDateButton="dateEnd"
                  // onChangeCustom={myFunction}
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
              type="button"
              background="primary"
              style={{ marginLeft: 5, marginTop: 15, width: '40%' }}
              onClick={listAnimalBreed}
            >
              Buscar
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
                    <StyledTableCell width="15%">Vencimento</StyledTableCell>
                    <StyledTableCell width="10%">Valor</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isListFinancial &&
                    isListFinancial.map(row => {
                      // console.log(row.pay_id);
                      return (
                        <StyledTableRow key={row.pay_item_id}>
                          <StyledTableCell component="th" scope="row">
                            {row.pay_item_id}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.pay_id.description}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.expected_date}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {parseFloat(row.expected_amount).toLocaleString(
                              'pt-br',
                              {
                                style: 'currency',
                                currency: 'BRL',
                              },
                            )}
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <ButtonUtil icon={FiSearch} background="primary" />
                            <Link to={`/edit_user/${row.pay_item_id}`}>
                              <ButtonUtil icon={FiEdit} background="primary" />
                            </Link>
                            <ButtonUtil icon={FiTrash2} background="primary" />
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
    </FormProvider>
  );
};

export default FormUsers;
