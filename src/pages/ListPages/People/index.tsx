/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
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
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiEdit, FiSearch, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch, Content } from './styles';
import peopleApi from '../../../services/PeopleApi';

import Input from '../../../components/InputLabelPure';
import Navbar from '../../../components/MenuMobile/Navbar';
import ButtonUtil from '../../../components/ButtonUtil';
import Loading from '../../../components/Loading';

interface arrayList {
  people_id: string;
  name: string;
}

const People: React.FC = () => {
  const methods = useForm({
    shouldUnregister: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [isListUsers, setListUsers] = useState<arrayList[]>([]);
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
      minWidth: 700,
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

  const listPeoples = () => {
    setIsLoading(true);
    peopleApi
      .getAll()
      .then(result => {
        setListUsers(result.response);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      })
      .catch(e => {
        console.log(e);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      });
  };

  useEffect(() => {
    listPeoples();
  }, []);

  const classes = useStyles();
  return (
    <>
      <Loading isLoading={isLoading} />
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
              <IconButton className="button-search">
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
                      console.log(row.people_id);
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
                            <Link to={`/edit_user/${row.people_id}`}>
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

export default People;
