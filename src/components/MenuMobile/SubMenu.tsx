/* eslint-disable no-nested-ternary */

import { shade } from 'polished';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  &:first-child {
    /* margin-top: 50px; */
  }

  border-top: 2px solid ${shade(0.1, '#17a0ae')};
  & > div {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
    align-items: center;
    &:first-child {
      margin-right: 20px;
    }

    + div {
      right: 20px;
      position: absolute;
      justify-content: flex-end;
    }
  }
  position: relative;
  display: flex;
  color: #e1e9fc;
  justify-content: center;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: calc(100% / 4);
  text-decoration: none;
  font-size: 18px;

  &:focus {
    border-left: 4px solid #ffbb00;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: ${shade(0.2, '#17a0ae')};
  height: 60px;
  /* padding-left: 1rem; */
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: ${shade(0.4, '#17a0ae')};
    cursor: pointer;
  }
`;

const SubMenu = ({ item: data }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={data.path} onClick={data.subNav && showSubnav}>
        <div>
          {data.icon}
          <SidebarLabel>{data.title}</SidebarLabel>
        </div>
        <div>
          {data.subNav && subnav
            ? data.iconOpened
            : data.subNav
            ? data.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        data.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
