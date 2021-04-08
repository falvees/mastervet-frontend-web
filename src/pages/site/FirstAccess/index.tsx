import React, { useEffect, useState } from 'react';
// import {
//   withStyles,
//   Theme,
//   createStyles,
//   makeStyles,
// } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { IoPersonCircle } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLock2Line } from 'react-icons/ri';

import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../../components/Button';
import {
  Container,
  GridHeaderSearch,
  Content,
  ContainerUser,
  LogoNav,
  TituloCadastro,
  LinkLogup,
  ListaItens,
} from './styles';
import HealthPlansApi, {
  PropsHealthPlans,
} from '../../../services/HealthPlansApi';
import Input from '../../../components/InputLabelPure';

interface RouteParams {
  id: string;
}

const FirstAccess: React.FC = () => {
  const [islistHealthPlans, setListHealthPlans] = useState<PropsHealthPlans[]>(
    [],
  );
  const { id } = useParams<RouteParams>(); // Or maybe have 'number'?
  // const {id} = useParams({id: true});
  console.log(id);
  // console.log('TESTE DE ID: ', id);

  const methods = useForm({
    shouldUnregister: false,
  });

  const onSubmit = data => console.log(data);

  const listHealthPlans = () => {
    HealthPlansApi.get(id)
      .then(result => {
        console.log(result);
        setListHealthPlans(result[0]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    // listHealthPlans();
  }, []);

  // const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <Container
        item
        sm={12}
        style={{ width: '100%', display: 'flex', height: '100vh' }}
      >
        <Content>
          <GridHeaderSearch container>
            <LogoNav />

            {/* <Link to="/register_animal_breed" className="add-user">
              <Button background="primary" style={{ width: 180 }}>
                Adicionar Raça
              </Button>
            </Link> */}

            <IoPersonCircle
              color="#fff"
              fontSize="40px"
              style={{ position: 'absolute', right: '10px', top: '10px' }}
            />

            <Link to={{ pathname: `../login/${id}` }}>
              <LinkLogup
                style={{ position: 'absolute', left: '7%', top: '10px' }}
              >
                <FiArrowLeft />
                Voltar
              </LinkLogup>
            </Link>
          </GridHeaderSearch>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'space-evenly',
              top: '100px',
            }}
          >
            <ContainerUser
              lg={4}
              md={8}
              sm={8}
              xs={12}
              style={{ background: '#ffcc29' }}
            >
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    font: 'bold 40px Ubuntu',
                    color: '#000',
                    textTransform: 'uppercase',
                    position: 'absolute',
                    top: '30px',
                    textShadow: '2px 2px 4px rgba(0,0,0,.3)',
                  }}
                >
                  {/* {islistHealthPlans &&
                    islistHealthPlans.map(row => {
                      return <h2>{row.description}</h2>;
                    })} */}
                  Plano Light
                </div>
                <div
                  style={{ position: 'absolute', top: '120px', left: '35%' }}
                >
                  R$
                </div>
                <div
                  style={{
                    color: '#17a0ae',
                    font: '700 80px Ubuntu',
                    position: 'absolute',
                    top: '110px',
                    textShadow: '2px 2px 4px rgba(0,0,0,.3)',
                  }}
                >
                  69
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '120px',
                    right: '34%',
                    color: '#17a0ae',
                  }}
                >
                  ,90
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '160px',
                    right: '31%',
                    color: '#000',
                  }}
                >
                  /mes
                </div>

                <ListaItens
                  style={{ position: 'absolute', top: '250px', left: '30%' }}
                >
                  <li>Consulta</li>
                  <li>Consultas Emergenciais</li>
                  <li>Exames Laboratoriais Simples</li>
                  <li>Cirurgia Simples ou Castração</li>
                  <li>Exames de Imagem</li>
                  <li>Atendimento Ambulatorial</li>
                  <li>Vacina (polivalente)</li>
                </ListaItens>
              </Grid>
            </ContainerUser>
            <ContainerUser lg={4} md={4} sm={8} xs={12}>
              <Grid
                item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <TituloCadastro>Definir Senha</TituloCadastro>

                <div style={{ marginTop: '70px' }}>
                  <Input name="user" label="Usuário" icon={AiOutlineUser} />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Input name="password" label="Senha" icon={RiLock2Line} />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Input
                    name="passwordConfirm"
                    label="Repetir Senha"
                    icon={RiLock2Line}
                  />
                </div>

                <Link
                  style={{ width: '100%', position: 'relative', left: '20%' }}
                  to="/my_pets"
                >
                  <Button
                    background="primary"
                    style={{ marginTop: 30, width: '60%' }}
                  >
                    Entrar
                  </Button>
                </Link>
              </Grid>
            </ContainerUser>
          </Grid>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default FirstAccess;
