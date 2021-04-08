import { Button, Grid } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';

export const ButtonLogin = styled(Button)`
  margin-top: 20px !important;
  background-color: #17a0ae !important;
  color: #fff !important;
  width: 100%;
  height: 3em;
`;
export const ContainerUser = styled(Grid)`
  background-color: #fff;
  position: relative;
  @media only screen and (max-width: 950px) {
    margin-bottom: 50px;
  }
`;
export const Pets = styled(Grid)`
  border: 1px solid rgb(255, 255, 255, 0.7);
  border-radius: 10px;
  height: 450px;
  width: 200px;
  z-index: 0;
  position: relative;
  background-color: #fff;
`;
export const LinkLogup = styled(Grid)`
  margin-top: 20px;
  display: inline-block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

export const ContainerDog = styled.div`
  display: flex;
  padding: 0px;
  /* border: 2px solid #bfbfbf; */
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  margin-top: 100px;
  & .profile-dog {
    position: absolute;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 12px solid #fff;
    background-size: cover !important;
    background-position: center center !important;
    transform: translateY(-50%);
  }
`;
export const ContainerDogDesc = styled.div`
  background-color: #17a0ae;
  padding: 80px 15px 15px;
  border-radius: 15px;
  width: 90%;

  & .input-root {
    margin: 15px 0;
  }
`;
export const ContainerInfoDesc = styled.div`
  background-color: transparent;
  padding: 15px 15px 15px 30px;
  border-left: 1px solid gainsboro;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;

  & .input-root {
    margin: 15px 0;
  }
`;

export const InfoItem = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 15px 20px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  color: #000;
  font: 600 17px 'Ubuntu';
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: 5px;

  & .input-root {
    margin: 15px 0;
  }
  & Link {
    @media only screen and (max-width: 600px) {
      left: 0%;
    }
  }
  & h1 {
    font: 300 17px 'Ubuntu';
    letter-spacing: -1px;
    text-align: center;
    margin-top: 5px;
  }
`;
