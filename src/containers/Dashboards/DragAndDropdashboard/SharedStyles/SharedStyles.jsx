import styled from "styled-components";

export const PlotContainer = styled.div`
  position: relative;
`;

export const DeleteIconStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1000;
  padding: 5px;
  border-radius: 50%;
  display: none;
`;

export const PlotContainerStyled = styled.div`
  &:hover ${DeleteIconStyled} {
    display: block;
  }
`;

export const DeleteIconStyledGraph = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  z-index: 1000;
  padding: 5px;
  border-radius: 50%;
  display: none;
`;

export const PlotContainerStyledGrapgh = styled.div`
  &:hover ${DeleteIconStyledGraph} {
    display: block;
  }
`;
