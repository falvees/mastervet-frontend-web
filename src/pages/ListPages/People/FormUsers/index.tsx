import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useForm, FormProvider } from 'react-hook-form';

import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../../../components/Button';
import Input from '../../../../components/InputLabelPure';
import MenuPrincipalLeft from '../../../../components/MenuPrincipalLeft';

import Select from '../../../../components/Select';
import { Container, Content, GridHeaderSearch, FormCustom } from './styles';
import PeopleApi, { PropsPeople } from '../../../../services/PeopleApi';
import Navbar from '../../../../components/MenuMobile/Navbar';
import Loading from '../../../../components/Loading';

// Tipagem para o History
interface PropsHistoryUser {
  user: PropsPeople;
}

const FormUsers: React.FC = () => {
  const history = useHistory(); // Inicializa o History do react-router-dom
  const [id, setId] = useState<number | null>(null); // Variavel de estado para armazenar o id caso seja Form de Editar
  const methods = useForm(); // Inicializa o hook form e todas propriedades ficam dentro de methods
  const { reset } = methods; // Desestruturaçao do reset de dentro do methods para nao ficar em loop
  const [isLoading, setIsLoading] = useState(false); // Variavel de estado para o Loading da pagina

  // Funçao do submit que envia os dados para api, diferenciando se é put ou post pelo id
  const onSubmit = async data => {
    console.log(data);

    if (!id) {
      await PeopleApi.create(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      await PeopleApi.put(data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  // Executa após a pagina ser carregada
  useEffect(() => {
    const dataHistory = (history?.location?.state as PropsHistoryUser)?.user; // Pega os valores do History enviado de outra pagina
    console.log(dataHistory);

    if (dataHistory !== null || dataHistory !== undefined) {
      setId(dataHistory?.people_id); // Seta o ID
    }

    // Funçao assincrona esperando ser chamada caso aja id
    async function fetchUser(idUser) {
      setIsLoading(true); // Ativa o Loading
      const result = await PeopleApi.get(idUser); // Chama api
      reset(result.data.response[0]); // Adiciona os valores nos input trago pela api
      setIsLoading(false); // Desativa o Loading
    }

    if (!id) return;
    fetchUser(id);
  }, [history, history?.location?.state, id, reset]);

  const kindPeople = [
    { value: '1', label: 'Física' },
    { value: '2', label: 'Jurídica' },
  ];

  const genders = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
  ];

  return (
    <FormProvider {...methods}>
      <Loading isLoading={isLoading} />
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

            <Navbar name={id ? 'Editar Cliente' : 'Criar Novo Cliente'} />

            <Grid
              className="title-header"
              container
              item
              sm={12}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <p style={{ fontWeight: 500, color: '#9d9d9c' }}>
                {id ? 'Editar Cliente' : 'Criar Novo Cliente'}
              </p>
              <hr
                style={{
                  border: 0,
                  borderBottom: '2px solid #17a0ae',
                  width: 130,
                  marginTop: 5,
                }}
              />
            </Grid>
          </GridHeaderSearch>
          <FormCustom noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <Input name="name" label="Nome Completo" icon={AiOutlineUser} />
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <Select
                  name="gender"
                  placeholder="Sexo"
                  options={genders}
                  required={false}
                />
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <Input mask="99/99/9999" name="date_birth" label="Nascimento" />
              </Grid>
              <Grid item xs={4} sm={6} md={2}>
                <Select
                  name="kind_people"
                  placeholder="Tipo Pessoa"
                  options={kindPeople}
                  required={false}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input name="cpf_cgc" label="CPF / CNPJ" />
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Input name="identity_document" label="RG" />
              </Grid>
              <Grid item xs={6} sm={6} md={2}>
                <Input name="issuing_entity" label="Orgão Emissor" />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input name="email" label="Email" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Input name="observations" label="Observações" />
              </Grid>

              <Grid item xs={4} sm={6} md={3}>
                <Input name="telephone01" label="Telefone" />
              </Grid>
              <Grid item xs={4} sm={6} md={3}>
                <Input name="telephone02" label="Celular" />
              </Grid>
              <Grid item xs={4} sm={6} md={3}>
                <Input name="telephone03" label="Celular" />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <Input name="cep" label="Cep" />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Input name="address" label="Endereço" />
              </Grid>
              <Grid item xs={8} sm={8} md={4}>
                <Input name="neighborhood" label="Bairro" />
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Input name="number_address" label="Número" />
              </Grid>

              <Grid item xs={12} sm={8} md={6}>
                <Input name="city" label="Cidade" />
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Input name="state" label="UF" />
              </Grid>
              <Grid item xs={8} sm={12} md={4}>
                <Input name="address_complement" label="Complemento" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              background="primary"
              style={{ marginTop: 15 }}
            >
              {id ? 'Atualizar' : 'Cadastar'}
            </Button>
          </FormCustom>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default FormUsers;
