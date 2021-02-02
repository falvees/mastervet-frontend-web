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
import { AiOutlineUser } from 'react-icons/ai';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, Content, GridHeaderSearch } from './styles';
import api from '../../../http-common';
import Input from '../../../components/InputLabelPure';
import { ButtonIcon } from '../../../components/InputLabelPure/styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import ButtonUtil from '../../../components/ButtonUtil';
import Navbar from '../../../components/MenuMobile/Navbar';

interface arrayList {
  type_id: string;
  description: string;
}

const AnimalType: React.FC = () => {
  const { getValues, register } = useForm();
  const [isListAnimaType, setListAnimalType] = useState<arrayList[]>([]);
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

  const listAnimalType = () => {
    const array: arrayList[] = [];
    AnimalTypeApi.getAll()
      .then(result => {
        setListAnimalType(result.response);
        console.log(result.response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listAnimalType();
  }, []);

  const classes = useStyles();
  return (
    <Container item sm={12} style={{ width: '100%', display: 'flex' }}>
      <MenuPrincipalLeft pages={['all']} />
      <Navbar name="Listando Usuários" />
      <Content>
        <Hidden only={['xs', 'sm']}>
          <Grid justify="center">
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
              // label="teste"
              // getValues={getValues}
              // register={register}
            />
            <IconButton className="button-search">
              <FiSearch color="#17a0ae" />
            </IconButton>
          </Grid>
          <Link to="/register_animal_type" className="add-user">
            <Button background="primary" style={{ width: 180 }}>
              Adicionar Tipo
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
                  <StyledTableCell width="50%">Descricao</StyledTableCell>
                  <StyledTableCell align="center" width="40%">
                    Ações
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isListAnimaType &&
                  isListAnimaType.map(row => {
                    // console.log(row.type_id);
                    return (
                      <StyledTableRow key={row.type_id}>
                        <StyledTableCell component="th" scope="row">
                          {row.type_id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {row.description}
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
                          <Link to="/users/1">
                            <ButtonUtil icon={FiEdit} background="primary" />
                          </Link>
                          <ButtonUtil
                            icon={FiTrash2}
                            background="primary"
                            onClick={() => {
                              Swal.fire({
                                title: 'Are you sure?',
                                text:
                                  'You will not be able to recover this imaginary file!',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, delete it!',
                                cancelButtonText: 'No, keep it',
                              }).then(result => {
                                if (result.value) {
                                  Swal.fire(
                                    'Deleted!',
                                    'Your imaginary file has been deleted.',
                                    'success',
                                  );
                                  // For more information about handling dismissals please visit
                                  // https://sweetalert2.github.io/#handling-dismissals
                                } else if (
                                  result.dismiss === Swal.DismissReason.cancel
                                ) {
                                  Swal.fire(
                                    'Cancelled',
                                    'Your imaginary file is safe :)',
                                    'error',
                                  );
                                }
                              });
                            }}
                          />
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

export default AnimalType;
