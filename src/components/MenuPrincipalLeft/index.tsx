import React, { useCallback, useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Container, OptionMenu } from './styles';
import logo from '../../assets/logo.png';
import client from '../../assets/profiles.png';
import report from '../../assets/report.png';
import risk from '../../assets/risk.png';

interface MenuProps {
  pages: string[];
  icon?: React.ComponentType<IconBaseProps>;
}

const MenuPrincipalLeft: React.FC<MenuProps> = ({
  icon: Icon,
  pages,
  ...rest
}) => {
  // const [isFocused, setIsFocused] = useState(false);

  // const useFocus = useCallback(() => {
  //   console.log('teste');
  // }, []);
  return (
    <Container container sm={1}>
      <img src={logo} alt="logo-menu-principal" />
      <OptionMenu>
        <ul>
          <li className="title-menu">
            <img src={client} alt="client-menu" />
            <a href="sobre">Cadastros</a>
          </li>
          <li className="title-menu">
            <img src={report} alt="report-menu" />
            <a href="roupas">Dashboard</a>
            <ul className="submenu">
              <li>
                {/* <RiArrowRightSLine /> */}

                <a href="masculino">Relatório Financeiro</a>
              </li>
              <li>
                {/* <RiArrowRightSLine /> */}

                <a href="feminino">Relatório Pets</a>
              </li>
              <li>
                {/* <RiArrowRightSLine /> */}
                <a href="infantil">Relatório Clientes</a>
              </li>
            </ul>
          </li>
          <li className="title-menu">
            <img src={risk} alt="risk-menu" />
            <a href="brinquedos">Gestão</a>
          </li>
        </ul>
        {/* <div className="options-menu">
        <img src={client} alt="client-menu" />
        <p>Clientes</p>
      </div>
      <div className="options-menu">
        <img src={report} alt="report-menu" />
        <p>Relatórios</p>
      </div>
      <div className="options-menu">
        <img src={risk} alt="risk-menu" />
        <p>Gestão</p>
      </div> */}
      </OptionMenu>
    </Container>
  );
};
export default MenuPrincipalLeft;
