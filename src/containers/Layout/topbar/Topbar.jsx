import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { colorHover } from '@/utils/palette';
import TopbarProfile from '../components/topbar/TopbarProfile';
import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton from '../components/topbar/TopbarSidebarButton';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarLogo,
  TopbarRight,
  TopbarRightOver,
  TopbarSearchWrap,
} from '../components/topbar/BasicTopbarComponents';

const Topbar = ({
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
  changeToLight,
  changeToDark,
}) => {
  const theme = useSelector((state) => state.theme);

  return (
    <TopbarContainer>
      <TopbarLeft>
        <TopbarSidebarButton
          onClickMobile={changeMobileSidebarVisibility}
          onClickDesktop={changeSidebarVisibility}
        />
        <TopbarLogo to="/home" />
      </TopbarLeft>

      <TopbarRight>
        <TopbarRightOver>
          <TopbarSearchWrap>
            <TopbarSearch />
          </TopbarSearchWrap>
          <ThemeBtnContainer onClick={theme.className === 'dark' ? changeToLight : changeToDark}>
            {theme.className === 'dark' ? (
              <LightThemeBtn className="lnr lnr-sun"></LightThemeBtn>
            ) : (
              <DarkThemeBtn className="lnr lnr-moon"></DarkThemeBtn>
            )}
          </ThemeBtnContainer>
          <TopbarProfile />
        </TopbarRightOver>
      </TopbarRight>
    </TopbarContainer>
  );
};

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;

const ThemeBtnContainer = styled.div`
  padding: 20px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active,
  &:focus:active {
    background-color: ${colorHover};
  }

  &:focus {
    outline: none;
  }

  &:before {
    display: none;
  }
`;

const LightThemeBtn = styled.span`
  color: #dddddd;
  font-size: 18px;
  font-weight: 900;
`;

const DarkThemeBtn = styled.span`
  color: #646777;
  font-size: 18px;
  font-weight: 900;
`;
