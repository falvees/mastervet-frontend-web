import { FormControl, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import backSignIn from '../../assets/background-insign.png';

export const Background = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  flex: 1;
  background: url(${backSignIn}) no-repeat center;
  background-size: cover;
`;

export const ButtonLogin = styled(Button)`
  margin-top: 20px !important;
  background-color: #17a0ae !important;
  color: #fff !important;
  width: 100%;
  height: 3.5em;
  text-transform: capitalize !important;
  border-radius: 10px !important;
`;

export const Container = styled(Grid)`
  display: flex;
  /* justify-content: center; */
  align-items: stretch;
  height: 100vh;
  /* width: 100%; */
`;

export const Content = styled.div`
  color: #9d9d9c;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  /* width: 100%; */
  min-width: 500px;
  max-width: 700px;
  & .button-root,
  & .input-root {
    margin: 0;
    margin-top: 15px;
  }
  img {
    width: 30px;
  }
  p {
    font-size: 20px;
    margin: 5px 0 10px 0;
  }
  form {
    width: 340px;
    text-align: center;
  }
`;
export const Input = styled(FormControl)`
  & .MuiInputBase-root {
    border-radius: 10px;
    margin: 10px 0 !important;
  }
  & label.Mui-focused {
    color: #a1a1a1;
  }
  & input fieldset {
    border-radius: 10px !important;
  }
  &:hover fieldset {
    border-color: #bfbfbf !important;
  }
  padding: 7px 14px;
  & input {
    color: #a1a1a1;
    &::-webkit-input-placeholder,
    -moz-placeholder,
    -ms-input-placeholder,
    -moz-placeholder {
      padding-left: 5px;
    }
    &:valid:focus + fieldset,
    &:valid:hover + fieldset,
    &:hover + fieldset,
    &:active + fieldset,
    &:hover {
      border-color: #bfbfbf;
    }
  }
`;
