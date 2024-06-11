import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { paddingLeft, paddingRight } from '@/utils/directions';
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
} from '@/redux/actions/sidebarActions';
import { changeThemeToDark, changeThemeToLight } from '@/redux/actions/themeActions';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './components/sidebar/Sidebar';
import Customizer from './customizer/Customizer';

const Layout = () => {
  const customizer = useSelector((state) => state.customizer);
  const sidebar = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const [themeValue, setThemeValue] = useState();

  const sidebarVisibility = () => {
    dispatch(changeSidebarVisibility());
  };

  const mobileSidebarVisibility = () => {
    dispatch(changeMobileSidebarVisibility());
  };

  const changeToDark = () => {
    const getDarkTheme = localStorage.getItem('theme');
    setThemeValue(getDarkTheme);
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    const getLightTheme = localStorage.getItem('theme');
    setThemeValue(getLightTheme);
    dispatch(changeThemeToLight());
  };

  return (
    <LayoutContainer collapse={sidebar.collapse} topNavigation={customizer.topNavigation}>
      <Customizer />
      {customizer.topNavigation ? (
        <TopbarWithNavigation changeMobileSidebarVisibility={mobileSidebarVisibility} />
      ) : (
        <Topbar
          changeMobileSidebarVisibility={mobileSidebarVisibility}
          changeSidebarVisibility={sidebarVisibility}
          changeToDark={changeToDark}
          changeToLight={changeToLight}
        />
      )}
      <Sidebar
        sidebar={sidebar}
        changeToDark={changeToDark}
        changeToLight={changeToLight}
        changeMobileSidebarVisibility={mobileSidebarVisibility}
        topNavigation={customizer.topNavigation}
      />
    </LayoutContainer>
  );
};

export default Layout;

// region STYLES

const LayoutContainer = styled.div`
  & + div {
    ${(props) =>
      props.collapse &&
      `
      ${paddingLeft(props)}: 0;
      ${paddingRight(props)}: 0;
    `};

    @media screen and (min-width: 576px) {
      ${(props) =>
        props.collapse &&
        `
        ${paddingLeft(props)}: 60px;
        ${paddingRight(props)}: 60px;
      `}

      ${(props) =>
        props.topNavigation &&
        `
         ${paddingLeft(props)}: 0;
         ${paddingRight(props)}: 0;
      `}
    }
  }
`;

// endregion
