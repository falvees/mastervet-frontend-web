import { Button, Grid } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';
import px2vw from '../../styles/px2vw';

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
  margin-bottom: 40px;
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
  > a:first-child {
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
    width: 180px;

    transition: all 0.2s;
    & button {
      margin: 20px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 960px) {
    & > .add-user {
      width: 130px;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 0;
    & > .add-user {
      & button {
        width: 100%;
      }
      width: 100%;
      position: relative;
    }
  }
`;
export const Content = styled(Grid)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 40px;
  width: 100%;
  /* background-color: red; */
  @media only screen and (max-width: 600px) {
    padding: 60px 15px 15px 15px;
  }
`;
