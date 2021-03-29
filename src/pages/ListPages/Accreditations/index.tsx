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
import { Grid, Hidden } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowLeft, FiEdit, FiSearch, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch, Content } from './styles';
import ButtonUtil from '../../../components/ButtonUtil';
import AccreditationsApi, {
  PropsAccreditations,
} from '../../../services/AccreditationsApi';
import Navbar from '../../../components/MenuMobile/Navbar';

const Acreditations: React.FC = () => {
  const history = useHistory();
  const methods = useForm();
  const [isListAccreditations, setListAccreditations] = useState<
    PropsAccreditations[]
  >([]);
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

  const listAccreditations = () => {
    AccreditationsApi.getAll()
      .then(result => {
        console.log(result);
        setListAccreditations(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listAccreditations();
  }, []);

  const handleRedirectFormEdit = (accre: PropsAccreditations) => {
    return history.push({
      pathname: `edit_accreditation`,
      state: {
        accre,
      },
    });
  };
  const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <Container item sm={12} style={{ width: '100%', display: 'flex' }}>
        <MenuPrincipalLeft pages={['all']} />
        <Navbar name="Listando Contratos" />
        <Content>
          <Hidden only={['xs', 'sm']}>
            <Grid justify="center">
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                Listando Contratos
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

            {/* <Grid
            item
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}

            <Input
              style={{ flex: 1, color: '#fff' }}
              name="search_user"
              placeholder="Digite aqui..."
              colorPlaceholder="#03818f"
              backgroundColor="#17a0ae"
              register={register}
            />
            <IconButton className="button-search">
              <FiSearch color="#17a0ae" />
            </IconButton>
          </Grid> */}
            <Link to="/register_accreditation" className="add-user">
              <Button background="primary" style={{ width: 180 }}>
                Adicionar Contrato
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
                    <StyledTableCell width="10%">Id</StyledTableCell>
                    <StyledTableCell width="30%">Cliente</StyledTableCell>
                    <StyledTableCell width="10%">Plano</StyledTableCell>
                    <StyledTableCell width="10%">Data Registro</StyledTableCell>
                    <StyledTableCell width="10%">Situação</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isListAccreditations &&
                    isListAccreditations.map(row => {
                      // console.log(row.type_id);
                      return (
                        <StyledTableRow key={row.accreditation_id}>
                          <StyledTableCell component="th" scope="row">
                            {row.accreditation_id}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.plan_id}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.registration_date}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.status}
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

export default Acreditations;
