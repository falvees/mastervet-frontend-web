import { Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Form } from '@unform/web';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
import Button from '../../components/Button';
import Input from '../../components/InputLabelPure';
import MenuPrincipalLeft from '../../components/MenuPrincipalLeft';
import Select from '../../components/Select';
import { Container, Content } from './styles';

const FormUsers: React.FC = () => {
  function handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }
  const kindPeople = [
    { id: '1', tipo: 'Física' },
    { id: '2', tipo: 'Jurídica' },
  ];

  return (
    <Container container>
      <MenuPrincipalLeft pages={['all']} />
      <Content>
        <Grid item sm={12}>
          <p>Criar Novo Cliente</p>
        </Grid>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <Input
                name="name"
                placeholder="Nome Completo"
                icon={AiOutlineUser}
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Select name="gender" placeholder="Sexo" options={kindPeople} />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input
                name="date_birth"
                placeholder="Nascimento"
                mask="99/99/9999"
              />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input name="kind_people" placeholder="Sexo" />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input name="cpf_cgc" placeholder="CPF / CNPJ" />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Input name="identity_document" placeholder="RG" />
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
              <Input name="issuing_entity" placeholder="Orgão Emissor" />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Input name="plan" placeholder="Plano Contratado" />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input name="telephone01" placeholder="Telefone" />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input name="telephone02" placeholder="Celular" />
            </Grid>
            <Grid item xs={4} sm={6} md={2}>
              <Input name="telephone03" placeholder="Celular" />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input name="email" placeholder="Email" />
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Input name="observations" placeholder="Observações" />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input name="cep" placeholder="Cep" />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Input name="address" placeholder="Endereço" />
            </Grid>
            <Grid item xs={8} sm={8} md={4}>
              <Input name="neighborhood" placeholder="Bairro" />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input name="number_address" placeholder="Número" />
            </Grid>

            <Grid item xs={12} sm={8} md={6}>
              <Input name="city" placeholder="Cidade" />
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Input name="state" placeholder="UF" />
            </Grid>
            <Grid item xs={8} sm={12} md={4}>
              <Input name="address_complement" placeholder="Complemento" />
            </Grid>
          </Grid>
          <Button type="submit" background="Primary">
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>

    // <Grid sm={12}>
    //   <p>CADASTRO PETS</p>
    // </Grid>
  );
};

export default FormUsers;
