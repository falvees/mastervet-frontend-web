import React, { useState } from 'react';

import {
  Container,
  LogoNav,
  NameNav,
  Nav,
  SidebarNav,
  SidebarWrap,
  StyledBurger,
} from './styles';
import { MenuData } from '../MenuPrincipalLeft/MenuData';
import SubMenu from './SubMenu';

type PropsNavbar = {
  name: string;
};

const Navbar: React.FC<PropsNavbar> = ({ name }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>

        <SidebarNav open={open}>
          <SidebarWrap>
            {MenuData.map(item => {
              return <SubMenu item={item} key={item.title} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Nav>
      <NameNav>
        <p style={{ fontWeight: 500, color: '#9d9d9c' }}>{name}</p>
        <hr
          style={{
            border: 0,
            borderBottom: '2px solid #17a0ae',
            width: '100%',
            marginTop: 5,
          }}
        />
      </NameNav>
      <LogoNav />
    </Container>
  );
};

export default Navbar;
