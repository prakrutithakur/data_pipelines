import React from 'react';
import styled from 'styled-components';
import { marginRight } from '@/utils/directions';
import TopbarNavDashboards from './TopbarNavDashboards';

const TopbarNav = () => (
  <TopbarNavigation>
    <TopbarNavDashboards />
  </TopbarNavigation>
);

export default TopbarNav;

// region STYLES

const TopbarNavigation = styled.nav`
  width: 75%;
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${marginRight}: 140px;

  @media screen and (min-width: 1400px) {
    display: flex;
  }

  @media screen and (max-width: 1550px) {
    width: 65%;
  }
`;

// endregion
