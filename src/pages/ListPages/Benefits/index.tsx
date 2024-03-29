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
import { FormProvider, useForm } from 'react-hook-form';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';
import { Container, GridHeaderSearch, Content } from './styles';
import Input from '../../../components/InputLabelPure';
import BenefitsApi from '../../../services/BenefitsApi';
import Navbar from '../../../components/MenuMobile/Navbar';

interface arrayList {
  benefit_id: string;
  description: string;
}

const Benefits: React.FC = () => {
  const methods = useForm({
    shouldUnregister: false,
  });
  const [isListBenefits, setListBenefits] = useState<arrayList[]>([]);
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

  const listBenefits = () => {
    BenefitsApi.getAll()
      .then(result => {
        setListBenefits(result.data.response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    listBenefits();
  }, []);

  const classes = useStyles();
  return (
    <FormProvider {...methods}>
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
              />
              <IconButton className="button-search">
                <FiSearch color="#17a0ae" />
              </IconButton>
            </Grid>

            <Link to="/register_user" className="add-user">
              <Button background="primary" style={{ width: 180 }}>
                Adicionar Benefício
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
                    <StyledTableCell align="center">Ações</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {isListBenefits &&
                    isListBenefits.map(row => {
                      return (
                        <StyledTableRow key={row.benefit_id}>
                          <StyledTableCell component="th" scope="row">
                            {row.benefit_id}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {row.description}
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
    </FormProvider>
  );
};

export default Benefits;
