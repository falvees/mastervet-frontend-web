import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Cadastros',
    path: '#',
    icon: <FaIcons.FaRegIdCard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Clientes',
        path: '/clientes',
        icon: <RiIcons.RiUserAddLine />,
        cName: 'sub-nav',
      },
      {
        title: 'Animais',
        path: '/animais',
        icon: <MdIcons.MdPets />,
        cName: 'sub-nav',
      },
      {
        title: 'Fornecedor',
        path: '/fornecedores',
        icon: <FaIcons.FaTruck />,
      },
    ],
  },
  {
    title: 'Relatórios',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Relatório 1',
        path: '#',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Relatório 2',
        path: '#',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Gestão',
    path: '/gestoes',
    icon: <FaIcons.FaCartPlus />,
  },
];
