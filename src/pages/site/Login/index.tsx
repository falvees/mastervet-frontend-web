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
import Button from '../../../components/Button';
import {
  Container,
  GridHeaderSearch,
  Content,
  ContainerUser,
  LogoNav,
  TituloCadastro,
  LinkLogup,
} from './styles';
import Input from '../../../components/InputLabelPure';
import HealthPlansApi, {
  PropsHealthPlans,
} from '../../../services/HealthPlansApi';

interface RouteParams {
  id: string;
}

const UserLogin: React.FC = () => {
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

            <IoPersonCircle
              color="#fff"
              fontSize="40px"
              style={{ position: 'absolute', right: '10px', top: '10px' }}
            />
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
              md={4}
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
                    font: 'bold 27px Ubuntu',
                    color: '#000',
                    textTransform: 'uppercase',
                    top: '20px',
                  }}
                >
                  {islistHealthPlans &&
                    islistHealthPlans.map(row => {
                      return <h2>{row.description}</h2>;
                    })}
                  {/* <c>Light</c> */}
                </div>
                <div className="sifrao light">R$</div>
                <div
                  style={{
                    color: '#17a0ae',
                    font: '700 60px Ubuntu',
                    position: 'absolute',
                    top: '80px',
                  }}
                >
                  69
                </div>
                <div style={{ position: 'absolute' }}>,90</div>
                <div className="mes light">/mes</div>
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
                <TituloCadastro>Faça Login</TituloCadastro>

                <div style={{ marginTop: '70px' }}>
                  <Input name="user" label="Usuário" icon={AiOutlineUser} />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <Input name="password" label="Senha" icon={RiLock2Line} />
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

              <Grid
                item
                className="linkLogup"
                style={{
                  display: 'flex',
                  // alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'space-evenly',
                  // flexDirection: 'column',
                  margin: '10px',
                }}
              >
                <Link to="/logup">
                  <LinkLogup>Registrar-se</LinkLogup>
                </Link>

                <Link to="/first_access">
                  <LinkLogup>Primeiro Acesso</LinkLogup>
                </Link>
              </Grid>
            </ContainerUser>
          </Grid>
        </Content>
      </Container>
    </FormProvider>
  );
};

export default UserLogin;
