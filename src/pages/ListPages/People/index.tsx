/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useState } from 'react';
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
import { Grid, Hidden, IconButton } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowLeft, FiEdit, FiSearch, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch, Content } from './styles';
import peopleApi, { PropsPeople } from '../../../services/PeopleApi';

import Input from '../../../components/InputLabelPure';
import Navbar from '../../../components/MenuMobile/Navbar';
import ButtonUtil from '../../../components/ButtonUtil';
import Loading from '../../../components/Loading';

const People: React.FC = () => {
  // Inicializa o hook form e todas propriedades ficam dentro de methods
  const methods = useForm({
    shouldUnregister: false,
  });
  const history = useHistory(); // Inicializa o History do react-router-dom
  const [isLoading, setIsLoading] = useState(false); // Variavel de estado para o Loading da pagina

  const [isListUsers, setListUsers] = useState<PropsPeople[]>([]);

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

  const listPeoples = useCallback(async () => {
    setIsLoading(true);
    let current = true;
    await peopleApi
      .getAll()
      .then(result => {
        console.log(result);
        setListUsers(result.data.response);
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      })
      .catch(e => {
        console.log(e);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      });
    return () => {
      current = false;
    };
  }, []);

  useEffect(() => {
    listPeoples();
  }, [listPeoples]);

  const handleRedirectFormEdit = (user: PropsPeople) => {
    console.log(user);
    return history.push({
      pathname: `edit_user`,
      state: {
        user,
      },
    });
  };

  const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <Loading isLoading={isLoading} background="#fff" />
      <Container item sm={12} style={{ width: '100%', display: 'flex' }}>
        <MenuPrincipalLeft pages={['all']} />
        <Navbar name="Listando Usuários" />
        <Content>
          <Hidden only={['xs', 'sm']}>
            <Grid container justify="center">
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Listando Usuários
              </p>
            </Grid>
          </Hidden>
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
              <Input
                style={{ flex: 1, color: '#fff' }}
                name="search_user"
                placeholder="Digite aqui..."
                colorPlaceholder="#03818f"
                backgroundColor="#17a0ae"
              />
              <IconButton className="button-search" onClick={listPeoples}>
                <FiSearch color="#17a0ae" />
              </IconButton>
            </Grid>
            <Link to="/register_user" className="add-user">
              <Button background="primary" style={{ width: 180 }}>
                Adicionar Cliente
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
                    <StyledTableCell width="40%">Nome</StyledTableCell>
                    <StyledTableCell align="center">CPF</StyledTableCell>
                    <StyledTableCell align="center">Plano</StyledTableCell>
                    <StyledTableCell align="center">Contato</StyledTableCell>
                    <StyledTableCell align="center">Situação</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isListUsers &&
                    isListUsers.map(row => {
                      return (
                        <StyledTableRow key={row.people_id}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            128.235.756-50
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            Master Premium
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            (34) 99120-1229
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            Ativado
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

                            <ButtonUtil
                              icon={FiEdit}
                              background="primary"
                              onClick={() => {
                                handleRedirectFormEdit(row);
                              }}
                            />

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

export default People;
