import React from 'react';
import styled from 'styled-components';
import { dashColor } from '@/utils/palette';

const TableNoData = ({ errorText }) => {
  return (
    <ErrorDiv>
      <ErrorSpan>{errorText ? errorText : 'No Data Found'}</ErrorSpan>
    </ErrorDiv>
  );
};

export default TableNoData;

// region STYLES

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
`;
const ErrorSpan = styled.span`
  color: ${(props) => dashColor(props)};
`;

// endregion
