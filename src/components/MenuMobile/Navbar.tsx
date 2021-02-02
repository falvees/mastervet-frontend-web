import React, { useState } from 'react';

import { FaIcons } from 'react-icons/fa';
import {
  Container,
  LogoNav,
  NameNav,
  Nav,
  SidebarNav,
  SidebarWrap,
  StyledBurger,
} from './styles';
import { SidebarData } from './SiderbarData';
import SubMenu from './SubMenu';

const Navbar = ({ name }) => {
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
            {SidebarData.map((item, index) => {
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
