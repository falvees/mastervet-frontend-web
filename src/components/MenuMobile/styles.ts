import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

interface StyledBurgerProps {
  open?: Boolean;
}

export const StyledBurger = styled.div<StyledBurgerProps>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 14px;
  left: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;

    background-color: ${props => (props.open ? '#fff' : '#17a0ae')};
    border-radius: 10px;
    transform-origin: 4.5px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${props =>
        props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${props => (props.open ? 0 : 1)};
      width: ${props => (props.open ? '2rem' : '1.7rem')};
    }
    &:nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Nav = styled.div``;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav<StyledBurgerProps>`
  overflow-y: auto;
  background: #17a0ae;
  width: 100vw;
  height: 100vh;
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${props => (props.open ? '0' : '-100%')};
  transition: 350ms;
  z-index: 15;
  & img {
    width: 40px;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  z-index: 10;
  top: 0;
  position: fixed;
  display: none;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 50px;
  visibility: hidden;
  @media (max-width: 700px) {
    display: flex;
    visibility: visible;
  }
`;
export const NameNav = styled.div`
  color: #666666;
  text-align: center;
  /* z-index: 20; */
`;
export const LogoNav = styled.div`
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  background: url(${logo}) no-repeat center;
  background-size: cover;
  z-index: 100;
`;
