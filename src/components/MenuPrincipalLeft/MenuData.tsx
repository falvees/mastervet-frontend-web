import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import { IconBaseProps } from 'react-icons/lib';
import client from '../../assets/profiles.png';
import report from '../../assets/report.png';
import risk from '../../assets/risk.png';

interface SubNavProps {
  title: string;
  path?: string;
  icon?: React.ComponentType<IconBaseProps> | any;
  cName?: string;
}
interface SidebarProps {
  title: string;
  path: string;
  icon: string | any;
  iconClosed?: React.ComponentType<IconBaseProps> | any;
  iconOpened?: React.ComponentType<IconBaseProps> | any;
  subNav?: SubNavProps[];
}

export const MenuData: SidebarProps[] = [
  {
    title: 'Cadastros',
    path: '/registers',
    icon: <img src={client} alt="client-menu" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cadastro Usuários',
        path: '/users',
        icon: <RiIcons.RiUserAddLine />,
        cName: 'sub-nav',
      },
      {
        title: 'Cadastro Espécie',
        path: '/animaltype',
        icon: <MdIcons.MdPets />,
        cName: 'sub-nav',
      },
      {
        title: 'Cadastro Raça',
        path: '/animalBreed',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Modalidades',
        path: '/modalities',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Rede Credenciada',
        path: '/partner',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Contas',
        path: '/accounts_categories',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Benefícios',
        path: '/benefits',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Procedimentos',
        path: '/procedures',
        icon: <FaIcons.FaTruck />,
      },
      {
        title: 'Cadastro Planos',
        path: '/plans',
        icon: <FaIcons.FaTruck />,
      },
    ],
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <img src={report} alt="report-menu" />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Relatório Financeiro',
        path: '/relatories_financial',
        icon: <RiIcons.RiUserAddLine />,
        cName: 'sub-nav',
      },
      {
        title: 'Relatório Pets',
        path: '/relatories_financial',
        icon: <RiIcons.RiUserAddLine />,
        cName: 'sub-nav',
      },
      {
        title: 'Relatório Clientes',
        path: '/relatories_financial',
        icon: <RiIcons.RiUserAddLine />,
        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Gestão',
    path: '/risk',
    icon: <img src={risk} alt="risk-menu" />,
  },
];
