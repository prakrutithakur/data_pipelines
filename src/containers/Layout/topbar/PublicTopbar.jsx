import React from 'react';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarLogo,
  TopbarRight,
  TopbarRightOver,
} from '../components/topbar/BasicTopbarComponents';

const PublicTopbar = ({ children }) => {
  return (
    <TopbarContainer>
      <TopbarLeft>
        <TopbarLogo to="/home" />
      </TopbarLeft>
      <TopbarRight style={{border: '1px solid red', justifyContent: 'center'}}>
        <TopbarRightOver>{children}</TopbarRightOver>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default PublicTopbar;
