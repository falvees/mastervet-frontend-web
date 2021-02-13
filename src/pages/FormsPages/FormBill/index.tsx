import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
  WithStyles,
} from '@material-ui/core/styles';
import InputMask from 'react-input-mask';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useFieldArray, useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '../../../components/Button';
import Input from '../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../components/MenuPrincipalLeft';

import Select from '../../../components/Select';
import { Container, Content, GridHeaderSearch, Form } from './styles';
import AnimalTypeApi from '../../../services/AnimalTypeApi';
import AnimalBreedApi from '../../../services/AnimalBreedApi';
import Navbar from '../../../components/MenuMobile/Navbar';
import InputDate from '../../../components/InputDate';
import BillsPay from '../../../services/BillsPay';
import InputMoney from '../../../components/InputMoney';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface RouteParams {
  id: string;
}
interface arrayList {
  breed_id: string;
  breed_name: string;
}
interface financialList {
  id: string;
  conta: string;
}
interface billProps {
  pay_id: string;
  pay_item_id: string;
  expected_amount: string;
  expected_date: string;
}
const FormAnimalBreed: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

  const StyledTableRow = withStyles(
    (theme: import('@material-ui/core').Theme) =>
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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperModal: {
      backgroundColor: '#FFF',
      // border: '2px solid #000',
      padding: '20px',
    },
    paper: {
      marginTop: 20,
      '&.MuiPaper-elevation5': {
        boxShadow:
          '-5px -5px 5px 4px rgba(0,0,0,0.05), 3px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
      },
    },
  });

  const { id } = useParams<RouteParams>();

  const {
    register,
    handleSubmit,
    errors,
    watch,
    control,
    setValue,
    reset,
    getValues,
  } = useForm({
    shouldUnregister: false,
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'update',
    },
  );

  const [isListAnimalBreed, setListAnimalBreed] = useState<arrayList[]>([]);
  const [isListFinancial, setIsListFinancial] = useState<financialList[]>([]);
  const [isBill, setIsBill] = useState<billProps[]>([]);

  const onSubmit = data => {
    if (fields.length !== 0) {
      console.log('update');
    } else {
      console.log(data);
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null) {
          // eslint-disable-next-line no-param-reassign
          data[key] = data[key].value;
        }
      });
      BillsPay.create(data)
        .then(response => {
          if (response.status === 201) {
            setValue('update', response.data.response[0].financial_pay_itens);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const listAnimalBreed = () => {
    BillsPay.getAll()
      .then(result => {
        setValue('update', result.response[40].financial_pay_itens);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };
  useEffect(() => {
    listAnimalBreed();
  }, []);

  const repetitionType = [
    { value: '15', label: '15 Dias' },
    { value: '21', label: '21 Dias' },
    { value: '30', label: '30 Dias' },
    { value: '45', label: '45 Dias' },
    { value: '60', label: '60 Dias' },
  ];

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();

    console.log(value); // value without mask (ex: 1234.56)
    console.log(maskedValue); // masked value (ex: R$1234,56)
  };
  const classes = useStyles();
  return (
    <Container container>
      <MenuPrincipalLeft pages={['all']} />

      <Content>
        <GridHeaderSearch
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <Navbar name="Contas a Pagar" />

          <Grid
            className="title-header"
            container
            item
            sm={12}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <p style={{ fontWeight: 500, color: '#9d9d9c' }}>Contas a Pagar</p>
            <hr
              style={{
                border: 0,
                borderBottom: '2px solid #17a0ae',
                width: 100,
                marginTop: 5,
              }}
            />
          </Grid>
        </GridHeaderSearch>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Input
                name="description"
                label="Descrição"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <InputDate
                name="date_init"
                label="Data da Compra"
                control={control}
                register={register}
                getValues={getValues}
                setValue={setValue}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <InputMoney
                name="amount"
                label="Valor Total"
                register={register}
                getValues={getValues}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                name="repetition"
                label="Quantidade Pagamentos"
                register={register}
                getValues={getValues}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Select
                name="repetition_type"
                placeholder="Intervalo"
                options={repetitionType}
                register={register}
                watch={watch}
                setValue={setValue}
                control={control}
                required
              />
              {errors.kind_people && (
                <p className="required-form">
                  <span>* </span>
                  Este campo é obrigatório.
                </p>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            background="primary"
            style={{ marginLeft: 5, marginTop: 15, width: '97.5%' }}
          >
            Enviar
          </Button>
        </Form>
        <div>
          <Button background="primary" onClick={handleClickOpen}>
            Open dialog
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Modal title
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} background="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <Paper
          elevation={2}
          style={{ width: '100%' }}
          className={classes.paper}
        >
          <TableContainer style={{ flex: 1 }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow hover>
                  <StyledTableCell width="5%">Qnt</StyledTableCell>
                  <StyledTableCell width="30%">Data</StyledTableCell>
                  <StyledTableCell width="50%">Descricao</StyledTableCell>
                  <StyledTableCell width="15%">Valor</StyledTableCell>
                  <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fields.map((row, index) => {
                  return (
                    <StyledTableRow key={row.pay_id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <InputDate
                          name={`update[${index}].expected_date`}
                          control={control}
                          register={register}
                          getValues={getValues}
                          setValue={setValue}
                          dateInitial={row.expected_date}
                        />
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {getValues('description')}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <InputMoney
                          name={`update[${index}].repetition`}
                          register={register}
                          getValues={getValues}
                          defaultValue={row.expected_amount}
                        />
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
        <Button
          type="submit"
          background="primary"
          style={{ marginLeft: 5, marginTop: 15, width: '97.5%' }}
        >
          Finalizar
        </Button>
      </Content>
    </Container>
  );
};

export default FormAnimalBreed;
