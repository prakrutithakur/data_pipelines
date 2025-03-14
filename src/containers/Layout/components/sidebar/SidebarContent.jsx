import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorBorder, colorBackground, colorHover } from '@/utils/palette';
import { left } from '@/utils/directions';
import SidebarLink, { SidebarLinkTitle } from './SidebarLink';

const SidebarContent = ({ onClick, collapse }) => {
  return (
    <SidebarContentWrap collapse={collapse}>
      <SidebarBlock collapse={collapse} style={{ textTransform: 'uppercase' }}>
        <SidebarLink title="Home" icon="home" route="/home" onClick={onClick} />
        <SidebarLink title="Dashboard" icon="chart-bars" route="/dashboard" onClick={onClick} />
        <SidebarLink title="Dashboard" icon="chart-bars" route="/dnddash" onClick={onClick} />
      </SidebarBlock>
    </SidebarContentWrap>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  collapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  collapse: false,
  onClick: () => {},
};

export default SidebarContent;

// region STYLES

const SidebarContentWrap = styled.div`
  height: 100%;
  overflow: auto;
  padding-top: 0;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  @media screen and (min-width: 576px) {
    padding-top: 15px;

    ${(props) =>
      props.collapse &&
      `
      width: 55px;
      overflow: visible !important;
      transition: width 0.3s;
    `}
  }
`;

const SidebarBlock = styled.ul`
  padding: 15px 0;
  border-bottom: 1px solid ${colorBorder};
  list-style-type: none;

  &:last-child {
    border: none;
  }

  @media screen and (min-width: 576px) {
    ${(props) =>
      props.collapse &&
      `
      & > li > a,
      & > li > button {
        overflow: hidden;
        width: 55px;
        background: ${colorBackground(props)};
        
        span:last-of-type {
          opacity: 0;
          transition: 0.3s;
        }
  
        ${SidebarLinkTitle} {
          position: absolute;
          width: 160px;
          ${left(props)}: 70px;
        }
  
        &:hover {
          background: ${colorHover(props)};
        }
      }
      
      & > li:hover > a,
      & > li:hover > button {
        width: 275px;
        
        span {
          opacity: 1;
        }
      }
    `}
  }
`;

// endregion
