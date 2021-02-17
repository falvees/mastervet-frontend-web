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

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { FiArrowLeft, FiEdit, FiSearch, FiTrash2 } from 'react-icons/fi';

import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch, Form } from './styles';
import FinancialPay from '../../../services/FinancialPayItem';
import Navbar from '../../../components/MenuMobile/Navbar';
import Loading from '../../../components/Loading';
import InputDate from '../../../components/InputDate';
import ButtonUtil from '../../../components/ButtonUtil';

interface RouteParams {
  id: string;
}
interface arrayList {
  pay_id: string;
  description: string;
  date_init: string;
  amount: string;
}
interface financialList {
  pay_item_id: string;
  pay_id: { description: string; pay_id: string };
  description: string;
  expected_date: string;
  expected_amount: string;
  status: string;
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
    minWidth: '100%',
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
  const [isListAnimalBreed, setListAnimalBreed] = useState<arrayList[]>([]);
  const [isListFinancial, setIsListFinancial] = useState<financialList[]>([]);
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

    // if (!id) {
    //   PeopleApi.create(data)
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // } else {
    //   PeopleApi.put(data)
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  };

  const listAnimalBreed = () => {
    const array: financialList[] = [];
    FinancialPay.getBetween(
      methods.getValues('dt_inicio'),
      methods.getValues('dt_end'),
    )
      .then(result => {
        console.log(result.response);
        result.response.forEach(item => {
          array.push(item);
        });
        setIsListFinancial(array);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listAnimalBreed();
  }, []);

  const kindPeople = [
    { value: '1', label: 'Física' },
    { value: '2', label: 'Jurídica' },
  ];
  const genders = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
  ];
  const plans = [
    { value: '1', label: 'Master Light' },
    { value: '2', label: 'Master Gold' },
    { value: '3', label: 'Master Premium ' },
  ];
  const classes = useStyles();
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
    </>
  );
};

export default FormUsers;
