import { Button, Grid } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web';
import logo from '../../../assets/logo.png';

export const ButtonLogin = styled(Button)`
  margin-top: 20px !important;
  background-color: #17a0ae !important;
  color: #fff !important;
  width: 100%;
  height: 3em;
`;
export const ContainerUser = styled(Grid)`
  width: 200px;
  height: 450px;
  border-radius: 20px;
  display: inline-block;
  z-index: 0;
  background-color: #fff;
  box-shadow: 0 5px 25px rgb(0 0 0 / 20%);
  position: relative;
  @media only screen and (max-width: 950px) {
    margin-bottom: 50px;
  }
`;

export const LinkLogup = styled(Grid)`
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  word-spacing: 10px;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

export const TituloCadastro = styled(Grid)`
  width: 200px;
  text-align: center;
  font-size: 18px;
  color: #111;
  justify-content: center;

  margin-top: 50px;
  left: auto;
  right: auto;
  border-left: 5px solid #ffcc29;
  padding-left: 10px;
`;

export const Container = styled(Grid)`
  /* display: flex; */
  /* align-items: center; */
  /* flex: 1; */
  /* height: 100vh; */
  /* width: 100%; */
  overflow-x: hidden;
`;
export const GridHeaderSearch = styled(Grid)`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #17a0ae;
  z-index: 1;
  & .button-search {
    height: 100%;
    position: absolute;
    left: 100%;
    &:hover svg {
      transition: color 0.2s;
      color: ${shade(0.2, '#17a0ae')} !important;
    }
  }
  div > .input-root {
    border-color: #17a0ae;
    color: #111;
  }
  a:first-child {
    position: absolute;
    text-decoration: none;
    left: 0;
    display: flex;
    align-items: center;
    color: #111;
    transition: color 0.2s;
    font-weight: 500;
    &:hover {
      color: ${shade(0.2, '#9d9d9c')};
    }
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  & > .add-user {
    position: absolute;
    text-decoration: none;
    right: 0;
    display: flex;
    align-items: center;
    color: #9d9d9c;
    transition: color 0.2s;
    font-weight: 500;
  }
  @media only screen and (max-width: 960px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & > .add-user {
      position: relative;
    }
  }
`;
export const inputsContainer = styled.input`
  position: absolute;
  top: 50px;
`;
export const Content = styled(Grid)`
  display: flex;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 40px;
  width: 100%;
  @media only screen and (max-width: 700px) {
    padding: 60px 15px 15px 15px;
  }
`;
export const LogoNav = styled.div`
  position: absolute;
  left: 1.5%;
  top: 13px;
  width: 35px;
  height: 35px;
  background: url(${logo}) no-repeat center;
  background-size: cover;
  z-index: 100;
`;

export const FormCustom = styled(Form)`
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
