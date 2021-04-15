/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Hidden } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowLeft, FiPrinter, FiSearch } from 'react-icons/fi';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch, Content } from './styles';
import Navbar from '../../../components/MenuMobile/Navbar';
import ButtonUtil from '../../../components/ButtonUtil';
import Loading from '../../../components/Loading';
import PdfDocument from './PdfDocument';
import formatCurrency from '../../../utils/formatCurrency';

const RelatoriesFinancial: React.FC = () => {
  const methods = useForm({
    shouldUnregister: false,
  });
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const StyledTableCell = withStyles(() =>
    createStyles({
      head: {
        color: '#000',
        fontWeight: 600,
      },
      body: {
        fontSize: 14,
      },
    }),
  )(TableCell);

  const StyledTableRow = withStyles((theme: Theme) =>
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

  const dummyData = [
    {
      id: '1',
      data: '15/04/2021',
      cliente: 'Kênia Borges ',
      plano: 'Light',
      devido: 20,
      pago: 15,
      situacao: 'aberto',
    },
    {
      id: '2',
      data: '15/04/2021',
      cliente: 'Felipe Fonseca Alves Ribeiro',
      plano: 'Light',
      devido: 20,
      pago: 25,
      situacao: 'aberto',
    },
    {
      id: '3',
      data: '15/04/2021',
      cliente: 'Lucilton Vieira',
      plano: 'Master',
      devido: 30,
      pago: 15,
      situacao: 'aberto',
    },
    {
      id: '4',
      data: '15/04/2021',
      cliente: 'Juliano Nogueira',
      plano: 'Master',
      devido: 20,
      pago: 35,
      situacao: 'aberto',
    },
    {
      id: '5',
      data: '15/04/2021',
      cliente: 'Gustavo Pereira',
      plano: 'Master',
      devido: 50,
      pago: 15,
      situacao: 'aberto',
    },
    {
      id: '6',
      data: '15/04/2021',
      cliente: 'Joao Silva Borges',
      plano: 'Light',
      devido: 20,
      pago: 55,
      situacao: 'aberto',
    },
    {
      id: '7',
      data: '15/04/2021',
      cliente: 'Maria Helena Santana',
      plano: 'Light',
      devido: 40,
      pago: 15,
      situacao: 'aberto',
    },
    {
      id: '8',
      data: '15/04/2021',
      cliente: 'Joaquim Santos Silva',
      plano: 'Light',
      devido: 20,
      pago: 55,
      situacao: 'aberto',
    },
  ];

  const classes = useStyles();

  return (
    <FormProvider {...methods}>
      <Loading isLoading={isLoading} background="#fff" />
      <Container item sm={12} style={{ width: '100%', display: 'flex' }}>
        <MenuPrincipalLeft pages={['all']} />
        <Navbar name="Listando Usuários" />
        <Content>
          <GridHeaderSearch container>
            <Hidden only={['xs', 'sm']}>
              <Link to="/">
                <FiArrowLeft />
                Voltar
              </Link>
            </Hidden>

            <Grid
              item
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <h1>RELATÓRIO FINANCEIRO</h1>
            </Grid>
            <Link to="/viewer" className="add-user" target="_blank">
              <Button background="primary" style={{ width: 180 }}>
                Imprimir
              </Button>
            </Link>
          </GridHeaderSearch>
          <Paper
            elevation={2}
            style={{ width: '100%' }}
            className={classes.paper}
          >
            <TableContainer style={{ flex: 1 }}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow hover>
                    <StyledTableCell>Data</StyledTableCell>
                    <StyledTableCell align="left" width="30%">
                      Cliente
                    </StyledTableCell>
                    <StyledTableCell align="center">Plano</StyledTableCell>
                    <StyledTableCell align="center">
                      Valor Devido
                    </StyledTableCell>
                    <StyledTableCell align="center">Valor Pago</StyledTableCell>
                    <StyledTableCell align="center">Situaçâo</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData &&
                    dummyData.map(row => {
                      return (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component="th" scope="row">
                            {row.data}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.cliente}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.plano}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatCurrency.format(row.devido)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatCurrency.format(row.pago)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.situacao}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <ButtonUtil
                                icon={FiSearch}
                                background="primary"
                              />
                            </div>
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

export default RelatoriesFinancial;
