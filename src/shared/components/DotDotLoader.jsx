import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Loading = ({ loadingState }) => (
  <DotDotLoader className="bouncing-loader" loadingState={loadingState}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </DotDotLoader>
);

Loading.propTypes = {
  loadingState: PropTypes.bool,
};

Loading.defaultProps = {
  loadingState: false,
};

export default Loading;

// region STYLES

const DotDotLoader = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0 0 0;
  height: 32px;

  & > div {
    width: 5px;
    height: 5px;
    background: #38b9eb;
    border-radius: 50%;
    margin: 0 2.5px;
    display: block;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  & > div:nth-child(1) {
    opacity: 0;
    -webkit-animation: bouncing-loader 0.5s linear infinite;
    animation: bouncing-loader 0.5s linear infinite;
    -webkit-transform: translateX(-9.375px);
    -ms-transform: translateX(-9.375px);
    transform: translateX(-9.375px);
  }

  & > div:nth-child(2) {
    -webkit-animation: bouncing-loader 0.5s linear infinite;
    animation: bouncing-loader 0.5s linear infinite;
  }
  & > div:nth-child(3) {
    -webkit-animation: bouncing-loader 0.5s linear infinite;
    animation: bouncing-loader 0.5s linear infinite;
  }
  & > div:nth-child(4) {
    -webkit-animation: bouncing-loader-out 0.5s linear infinite;
    animation: bouncing-loader-out 0.5s linear infinite;
  }
  @keyframes bouncing-loader {
    to {
      opacity: 1;
      transform: translateX(9.375px);
      filter: none;
    }
  }
  @keyframes bouncing-loader-out {
    to {
      transform: translateX(18.75px);
      opacity: 0;
    }
  }
`;
