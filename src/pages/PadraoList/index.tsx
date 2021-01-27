import {
  createStyles,
  Grid,
  Hidden,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  Theme,
  TableCell,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/InputLabelPure';
import MenuPrincipalLeft from '../../components/MenuPrincipalLeft';

import peopleApi from '../../services/PeopleApi';

import { Container, GridHeaderSearch, Content } from './styles';
import MenuMobile from '../../components/MenuMobile/Navbar';
// import MenuMobile from '../../components/Menu/Sidebar';

interface arrayList {
  user_id: string;
  name: string;
}

const StyledTableCell = withStyles((theme: Theme) =>
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

const FormUsers: React.FC = () => {
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
  const [isListUsers, setListUsers] = useState<arrayList[]>([]);

  const listPeoples = () => {
    peopleApi
      .getAll()
      .then(result => {
        setListUsers(result.response);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const arrayTeste = [
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
    { user_id: '1', name: 'teste' },
  ];
  useEffect(() => {
    listPeoples();
  }, []);

  const classes = useStyles();

  return (
    <Container container sm={12} style={{ width: '100%', flex: 1 }}>
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
          <Hidden only={['xs', 'sm']}>
            <Link to="/">
              <FiArrowLeft color="red" />
              Voltar
            </Link>
          </Hidden>

          <MenuMobile name="Listando Usuários" />

          <Hidden only={['xs', 'sm']}>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Listando Usuários
              </p>
            </Grid>
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
              // label="teste"
              getValues={getValues}
              register={register}
            />
            <IconButton className="button-search">
              <FiSearch color="#17a0ae" />
            </IconButton>
          </Grid>
          <Link to="/cadastro_usuario" className="add-user">
            <Button background="primary" style={{ width: 180 }}>
              Adicionar Cliente
            </Button>
          </Link>
        </GridHeaderSearch>
        <Paper
          elevation={5}
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
                {arrayTeste &&
                  arrayTeste.map(row => {
                    // console.log(row.type_id);
                    return (
                      <StyledTableRow key={row.user_id}>
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
export default FormUsers;
