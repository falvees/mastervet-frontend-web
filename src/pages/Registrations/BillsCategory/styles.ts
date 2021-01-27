import { Button, Grid } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';

export const ButtonLogin = styled(Button)`
  margin-top: 20px !important;
  background-color: #17a0ae !important;
  color: #fff !important;
  width: 100%;
  height: 3em;
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
  position: relative;

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
  }
  a:first-child {
    position: absolute;
    text-decoration: none;
    left: 0;
    display: flex;
    align-items: center;
    color: #9d9d9c;
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
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 50px;
  width: 100%;
  /* background-color: red; */
`;
