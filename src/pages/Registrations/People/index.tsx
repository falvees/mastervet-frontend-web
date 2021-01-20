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
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container } from './styles';
import PeopleApi from '../../../services/PeopleApi';

const People: React.FC = () => {
  const [isListUsers, setListUsers] = useState([]);
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: '#F9D448',
        color: theme.palette.common.white,
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

  const listPeoples = async () => {
    const array = [];
    const result = await PeopleApi.getAll();
    console.log(result);

    // PeopleApi.getAll()
    //   .then(response => {
    //     console.log(response);
    //     // response.data.response.forEach(item => {
    //     //   // array.push(item);
    //     // });
    //     // setListUsers(array);
    //     // console.log(isListUsers);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };

  useEffect(() => {
    listPeoples();
  }, []);

  const classes = useStyles();
  return (
    <Container container sm={12} style={{ width: '100%' }}>
      <MenuPrincipalLeft pages={['all']} />
      <TableContainer component={Paper} style={{ flex: 1 }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isListUsers.map(row => (
              <StyledTableRow key={row.client_id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.national_register}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.complement}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.neighborhood}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.federative_unit}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default People;
