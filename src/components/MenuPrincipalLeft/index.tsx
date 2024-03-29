import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { Container, OptionMenu, Content } from './styles';
import logo from '../../assets/logo.png';

import { MenuData } from './MenuData';

interface MenuProps {
  pages: string[];
  icon?: React.ComponentType<IconBaseProps>;
}

const MenuPrincipalLeft: React.FC<MenuProps> = () => {
  return (
    // <RiArrowRightSLine />
    <Container container item sm={1}>
      <Content>
        <img src={logo} alt="logo-menu-principal" />
        <OptionMenu>
          <ul>
            {MenuData.map(item => {
              return (
                <li className="title-menu" key={item.title}>
                  {item.icon}
                  <Link to={`${item.path}`}>{item.title}</Link>
                  <ul className="submenu">
                    {item.subNav &&
                      item.subNav.map(itemSub => {
                        return (
                          <li key={itemSub.title}>
                            {itemSub.icon}
                            <Link to={`${itemSub.path}`}>{itemSub.title}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </OptionMenu>
        <Link to="/" className="logout">
          <HiOutlineLogout />
          Voltar
        </Link>
      </Content>
    </Container>
  );
};
export default MenuPrincipalLeft;
