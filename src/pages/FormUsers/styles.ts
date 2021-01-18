import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonLogin = styled(Button)`
  margin-top: 20px !important;
  background-color: #17a0ae !important;
  color: #fff !important;
  width: 100%;
  height: 3em;
`;

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 50px;
  height: 100vh;
  width: 100%;
  /* background-color: red; */
`;
