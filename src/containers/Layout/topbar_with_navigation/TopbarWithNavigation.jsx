import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginLeft } from '@/utils/directions';
import TopbarProfile, {
  TopbarAvatarName,
  TopbarProfileWrap,
} from '../components/topbar/TopbarProfile';
import TopbarSidebarButton, {
  TopbarDesktopButton,
  TopbarMobileButton,
} from '../components/topbar/TopbarSidebarButton';
import TopbarNav from './tobar_nav/TopbarNav';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarRight,
  TopbarRightOver,
  TopbarLogo,
} from '../components/topbar/BasicTopbarComponents';

const TopbarWithNavigation = ({ changeMobileSidebarVisibility }) => (
  <TopbarNavigationContainer>
    <TopbarLeft>
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeMobileSidebarVisibility}
      />
      <TopbarLogo to="/app" />
    </TopbarLeft>
    <TopbarNav />
    <TopbarRight>
      <TopbarRightOver>
        <TopbarProfile />
      </TopbarRightOver>
    </TopbarRight>
  </TopbarNavigationContainer>
);

TopbarWithNavigation.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
};

export default TopbarWithNavigation;

// region STYLES

const TopbarNavigationContainer = styled(TopbarContainer)`
  @media screen and (min-width: 1400px) {
    ${TopbarLogo} {
      display: block;
      ${marginLeft}: 15px;
    }

    ${TopbarDesktopButton} {
      display: none;
    }

    ${TopbarMobileButton} {
      display: none;
    }

    ${TopbarAvatarName} {
      display: none;
    }

    ${TopbarProfileWrap} {
      ${marginLeft}: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    ${TopbarAvatarName} {
      display: block;
    }
  }
`;

// endregion
