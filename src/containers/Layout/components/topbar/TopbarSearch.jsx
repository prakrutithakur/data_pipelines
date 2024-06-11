import React from 'react';
import styled from 'styled-components';
// import VinSearch from '../../../Dashboards/VinSearch';

const TopbarSearch = () => (
  <TopbarSearchForm style={{ width: '500px' }}>
    {/* <VinSearch diagnostics={true} /> */}
  </TopbarSearchForm>
);

export default TopbarSearch;

// region STYLES

const TopbarSearchForm = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
  margin: auto 0 15px;
  float: right;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

// endregion
