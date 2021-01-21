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

import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch } from './styles';
import peopleApi from '../../../services/PeopleApi';
import api from '../../../http-common';
import Input from '../../../components/InputLabelPure';

interface arrayList {
  type_id: string;
  description: string;
}
const People: React.FC = () => {
  const { getValues, register } = useForm();
  const [isListUsers, setListUsers] = useState<arrayList[]>([]);
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

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   const response = await listDreams();
  //   const array = [];
  //   response.forEach(item => {
  //     array.push({ value: item, label: item });
  //   });
  //   setItems(array);
  // }, []);

  const listPeoples = () => {
    const array: arrayList[] = [];

    peopleApi
      .getAll()
      .then(response => {
        // console.log(response);
        response.forEach(item => {
          setListUsers(response);
          // array.push({ descricao: item.description, id: item.type_id });
        });
      })
      .catch(e => {
        console.log(e);
      });
    setListUsers(array);
    console.log(isListUsers);
  };
  // const listPeoples = () => {
  //   // const response = await getAll();
  //   // peopleApi().then(response => {
  //   //   console.log(response);
  //   // });
  //   // console.log(await peopleApi());
  //   const array = [];
  //   api
  //     .get('/animals')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    listPeoples();
  }, []);

  const classes = useStyles();
  return (
    <Container container sm={12} style={{ width: '100%' }}>
      <MenuPrincipalLeft pages={['all']} />
      <Grid container sm style={{ padding: '20px 40px', height: '100%' }}>
        <Grid container sm={12} alignItems="center" justify="center">
          <p style={{ fontWeight: 500, color: '#9d9d9c' }}>Buscar Cliente</p>
        </Grid>
        <GridHeaderSearch
          container
          sm={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <Input
            style={{ flex: 1, color: '#fff' }}
            className="teste"
            name="search_user"
            placeholder="Digite aqui..."
            colorPlaceholder="#03818f"
            backgroundColor="#17a0ae"
            // label="teste"
            getValues={getValues}
            register={register}
          />
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
                {isListUsers &&
                  isListUsers.map(row => {
                    // console.log(row.type_id);
                    return (
                      <StyledTableRow key={row.type_id}>
                        <StyledTableCell component="th" scope="row">
                          {row.description}
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
      </Grid>
    </Container>
  );
};

export default People;
