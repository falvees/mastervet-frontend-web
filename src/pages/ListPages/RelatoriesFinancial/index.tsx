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
    { id: '1', entrada: 20, saida: 15 },
    { id: '2', entrada: 20, saida: 25 },
    { id: '3', entrada: 30, saida: 15 },
    { id: '4', entrada: 20, saida: 35 },
    { id: '5', entrada: 50, saida: 15 },
    { id: '6', entrada: 20, saida: 55 },
    { id: '7', entrada: 40, saida: 15 },
    { id: '8', entrada: 20, saida: 55 },
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
                    <StyledTableCell width="40%">ID</StyledTableCell>
                    <StyledTableCell align="center">Entrada</StyledTableCell>
                    <StyledTableCell align="center">Saída</StyledTableCell>
                    <StyledTableCell align="center">Saldo</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyData &&
                    dummyData.map(row => {
                      return (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component="th" scope="row">
                            {row.id}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatCurrency.format(row.entrada)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatCurrency.format(row.saida)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {formatCurrency.format(row.entrada - row.saida)}
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
