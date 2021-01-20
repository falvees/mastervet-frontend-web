import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export interface MenuProps {
  color?: string;
  isFocused?: boolean;
}
export interface OptionMenuProps {
  color?: string;
  isFocused?: boolean;
}

export const Container = styled(Grid)<MenuProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #17a0ae;
  border-radius: 0 20px 20px 0;
  border: 0;
  padding: 20px 0;
  color: #bfbfbf;
  width: 150px;
  min-width: 150px;
  height: 100vh;
  fill: red;

  & img {
    width: 80px;
  }
`;

export const OptionMenu = styled.nav<OptionMenuProps>`
  width: 90%;
  margin: 0 0 0 10%;
  .title-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #17a0ae;
    margin: 20px 0;
    transition: background-color 0.2s;
    transition-timing-function: ease-out;

    & img {
      filter: contrast(100%) brightness(100%);
      width: 30px;
      margin-bottom: 10px;
    }
  }
  .title-menu:hover img {
    filter: contrast(100%) brightness(50%);
  }
  .submenu {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 180px;
    background-color: #fff;
  }
  .submenu a {
    width: 100%;
    transition: padding-left 0.4s;
    color: gray;
  }
  .submenu li {
    transition: padding-left 0.4s;
  }
  /* .submenu li:hover svg {
    color: #17a0ae;
    margin-left: 4px;
  } */
  .submenu li:hover {
    padding-left: 15px;
  }
  .submenu li:hover svg,
  .submenu li:hover a {
    font-weight: 500;
    color: #17a0ae;
  }

  .submenu li {
    height: 36px;
    display: flex;
    flex: 1;
    align-items: center;
    padding-left: 10px;
    /* & + li {
      border-top: 2px solid blue;
    } */
  }
  ul {
    list-style: none;
    width: 200px;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .title-menu:hover > a {
    color: gray;
  }
  .title-menu:hover {
    background-color: #fff;
  }
  li {
    position: relative; /* Necessário para flutuar os submenus */
  }
  a {
    color: #fff;
    /* border: 1px #38afda solid; */
    display: block;
    text-decoration: none;
    font-size: 10pt;
    /* padding: 10px 5px; */
  }
  .title-menu:hover::before,
  .title-menu:hover::after {
    opacity: 1;
  }
  li ul {
    display: none;
  }
  li:hover > ul {
    display: block;
  }
  li ul {
    position: absolute;
    left: 100%; /* Posiciona o menu filho ao lado do menu pai */
    top: 0; /* Posiciona o menu filho no topo do menu pai */
  }

  .title-menu::before,
  .title-menu::after {
    opacity: 0;
    content: '';
    width: 20px;
    height: 20px;
    right: 0;
    position: absolute;
    transition: opacity 0.2s;
    transition-timing-function: ease;
  }

  .title-menu::before {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M0 0 Q20 0 20 20 L20 0Z" /></svg>');
    bottom: -20px;
  }

  .title-menu::after {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M0 20 Q20 20 20 0 L20 20Z" /></svg>');
    top: -20px;
  }

  & p {
    font-size: 8pt;
  }
`;
